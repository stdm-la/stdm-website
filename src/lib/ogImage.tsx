/**
 * Shared Open Graph image renderer for STDM pages.
 * Used by root and per-category opengraph-image routes.
 */
export function buildOgImageJsx(options: {
  title: string
  subtitle: string
  badge?: string
}) {
  const { title, subtitle, badge } = options

  return (
    <div
      style={{
        background: '#0a0e17',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
      }}>
      <div
        style={{
          fontSize: 48,
          fontWeight: 800,
          background: 'linear-gradient(135deg, #2563EB 0%, #6366F1 50%, #7C3AED 100%)',
          backgroundClip: 'text',
          color: 'transparent',
          margin: 0,
          letterSpacing: '-0.02em',
        }}>
        STDM
      </div>
      {badge ? (
        <div
          style={{
            marginTop: 20,
            fontSize: 16,
            color: '#93c5fd',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
          {badge}
        </div>
      ) : null}
      <p
        style={{
          fontSize: 36,
          color: '#e2e8f0',
          marginTop: badge ? 12 : 24,
          textAlign: 'center',
          maxWidth: '960px',
          lineHeight: 1.3,
          fontWeight: 700,
        }}>
        {title}
      </p>
      <p
        style={{
          fontSize: 22,
          color: '#94a3b8',
          marginTop: 16,
          textAlign: 'center',
          maxWidth: '880px',
          lineHeight: 1.4,
        }}>
        {subtitle}
      </p>
      <p
        style={{
          fontSize: 18,
          color: '#64748b',
          marginTop: 28,
          textAlign: 'center',
        }}>
        Costa Rica · stdm-la.com
      </p>
    </div>
  )
}

export const ogImageSize = {
  width: 1200,
  height: 630,
}
