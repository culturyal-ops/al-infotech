import { NextRequest, NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis or database)
const rateLimit = new Map();

// DDoS protection configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // limit each IP to 100 requests per windowMs
  skipSuccessfulRequests: false,
};

// Bot detection patterns
const BOT_PATTERNS = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
  /curl/i,
  /wget/i,
  /python/i,
  /php/i,
];

// Suspicious patterns
const SUSPICIOUS_PATTERNS = [
  /\.\./,
  /\/\//,
  /<script/i,
  /javascript:/i,
  /vbscript:/i,
  /onload=/i,
  /onerror=/i,
];

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return request.ip || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;
  
  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);
  }
  
  const requests = rateLimit.get(ip);
  
  // Remove old requests outside the window
  const validRequests = requests.filter((timestamp: number) => timestamp > windowStart);
  
  // Update the store
  rateLimit.set(ip, validRequests);
  
  // Check if limit exceeded
  if (validRequests.length >= RATE_LIMIT.maxRequests) {
    return true;
  }
  
  // Add current request
  validRequests.push(now);
  rateLimit.set(ip, validRequests);
  
  return false;
}

function isSuspiciousRequest(request: NextRequest): boolean {
  const url = request.url;
  const userAgent = request.headers.get('user-agent') || '';
  
  // Check for suspicious patterns in URL
  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (pattern.test(url)) {
      return true;
    }
  }
  
  // Check for bot patterns (allow legitimate bots)
  const isBot = BOT_PATTERNS.some(pattern => pattern.test(userAgent));
  if (isBot && !userAgent.includes('Googlebot') && !userAgent.includes('Bingbot')) {
    return true;
  }
  
  // Check for missing or suspicious user agent
  if (!userAgent || userAgent.length < 10) {
    return true;
  }
  
  return false;
}

export function middleware(request: NextRequest) {
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  
  // Skip middleware for static files and API routes in development
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Rate limiting
  if (isRateLimited(ip)) {
    console.log(`Rate limit exceeded for IP: ${ip}`);
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '900', // 15 minutes
        'X-RateLimit-Limit': RATE_LIMIT.maxRequests.toString(),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': (Date.now() + RATE_LIMIT.windowMs).toString(),
      },
    });
  }
  
  // Suspicious request detection
  if (isSuspiciousRequest(request)) {
    console.log(`Suspicious request blocked from IP: ${ip}, UA: ${userAgent}`);
    return new NextResponse('Forbidden', { status: 403 });
  }
  
  // Add security headers to response
  const response = NextResponse.next();
  
  // Add rate limit headers
  const requests = rateLimit.get(ip) || [];
  response.headers.set('X-RateLimit-Limit', RATE_LIMIT.maxRequests.toString());
  response.headers.set('X-RateLimit-Remaining', (RATE_LIMIT.maxRequests - requests.length).toString());
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};