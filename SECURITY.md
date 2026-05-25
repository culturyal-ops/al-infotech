# Security Features

## 🔒 **DDoS Protection**

### **Rate Limiting**
- **100 requests per 15 minutes** per IP address
- Automatic blocking of excessive requests
- Graceful 429 responses with retry headers

### **Bot Detection**
- Suspicious user agent filtering
- Pattern-based bot detection
- Whitelist for legitimate crawlers (Googlebot, Bingbot)

### **Request Filtering**
- XSS attempt detection
- Path traversal protection
- Malicious script blocking

## 🛡️ **Security Headers**

### **Content Security Policy (CSP)**
```
default-src 'self';
script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com;
style-src 'self' 'unsafe-inline' fonts.googleapis.com;
img-src 'self' data: blob: *.unsplash.com;
```

### **Other Headers**
- `Strict-Transport-Security`: Forces HTTPS
- `X-Frame-Options`: Prevents clickjacking
- `X-Content-Type-Options`: Prevents MIME sniffing
- `Referrer-Policy`: Controls referrer information

## 🔐 **Input Validation**

### **Form Validation**
- Zod schema validation
- Phone number format checking
- Email validation
- XSS prevention

### **Sanitization**
- Automatic input sanitization
- SQL injection prevention
- Script tag filtering

## 📊 **Monitoring**

### **Security Logging**
- Rate limit violations
- Suspicious request attempts
- Bot detection events
- Error tracking with Vercel

### **Performance Monitoring**
- Speed Insights integration
- Core Web Vitals tracking
- Real user monitoring

## ⚙️ **Configuration**

### **Rate Limit Settings**
```typescript
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,          // requests per window
};
```

### **Customization**
Edit `middleware.ts` to adjust:
- Rate limit thresholds
- Bot detection patterns
- Suspicious request patterns
- IP whitelist/blacklist

## 🚨 **Incident Response**

### **If Under Attack**
1. Monitor logs for patterns
2. Adjust rate limits if needed
3. Add specific IP blocks
4. Contact hosting provider

### **Emergency Contacts**
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Developer: [Contact information]

## 📋 **Security Checklist**

- ✅ Rate limiting enabled
- ✅ Security headers configured
- ✅ Input validation implemented
- ✅ Bot detection active
- ✅ Error boundaries in place
- ✅ HTTPS enforced
- ✅ Monitoring configured
- ✅ Regular security updates

## 🔄 **Updates**

Keep security features updated:
```bash
npm audit
npm update
```

Review and update security policies quarterly.