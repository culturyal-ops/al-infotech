import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AL-INFOTECH Tours and Travels - Umrah & Kashmir Packages';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1A3A2A',
          backgroundImage: 'linear-gradient(135deg, #1A3A2A 0%, #2D5A40 100%)',
        }}
      >
        {/* Logo/Brand Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
          }}
        >
          {/* Main Heading */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            AL-INFOTECH
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: '#D4AF37',
              textAlign: 'center',
              marginBottom: 40,
              letterSpacing: '0.1em',
            }}
          >
            TOURS AND TRAVELS
          </div>

          {/* Divider */}
          <div
            style={{
              width: 120,
              height: 2,
              backgroundColor: '#D4AF37',
              marginBottom: 40,
            }}
          />

          {/* Description */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.5,
            }}
          >
            First Licensed Umrah Operator in Andhra Pradesh & Telangana
          </div>

          {/* Badges */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginTop: 50,
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(184,150,12,0.2)',
                color: '#D4AF37',
                padding: '12px 24px',
                borderRadius: 4,
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: '0.15em',
              }}
            >
              NUSUK CERTIFIED
            </div>
            <div
              style={{
                backgroundColor: 'rgba(184,150,12,0.2)',
                color: '#D4AF37',
                padding: '12px 24px',
                borderRadius: 4,
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: '0.15em',
              }}
            >
              SINCE 2018
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
