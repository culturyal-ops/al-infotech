'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FDFAF5',
          padding: '24px',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '500px',
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1A3A2A',
              marginBottom: '16px',
            }}>
              Something went wrong!
            </h2>
            <p style={{
              color: '#6B6560',
              marginBottom: '24px',
            }}>
              We&apos;re experiencing technical difficulties. Please try again.
            </p>
            <button
              onClick={reset}
              style={{
                backgroundColor: '#B8960C',
                color: '#1C1917',
                padding: '12px 32px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
