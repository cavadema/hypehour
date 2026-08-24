import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #f7f8fa 0%, #ffffff 50%, #f0f1f3 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.04)',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.03)',
          display: 'flex',
        }}
      />

      {/* Badge */}
      <div
        style={{
          background: '#000',
          color: '#fff',
          fontSize: 18,
          fontWeight: 600,
          padding: '8px 20px',
          borderRadius: 999,
          marginBottom: 28,
          display: 'flex',
          letterSpacing: '0.05em',
        }}
      >
        ✦ hypehour.com.br
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: '#0a0a0a',
          textAlign: 'center',
          lineHeight: 1.1,
          maxWidth: 900,
          display: 'flex',
        }}
      >
        Ferramentas de IA
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 30,
          color: '#555',
          marginTop: 20,
          textAlign: 'center',
          maxWidth: 800,
          display: 'flex',
        }}
      >
        400+ ferramentas curadas em 47 categorias
      </div>

      {/* Stats row */}
      <div
        style={{
          display: 'flex',
          gap: 48,
          marginTop: 52,
          padding: '20px 48px',
          background: '#fff',
          borderRadius: 16,
          border: '1px solid #e4e4e7',
        }}
      >
        {[
          { value: '47+', label: 'Categorias' },
          { value: '400+', label: 'Ferramentas' },
          { value: '80+', label: 'Páginas' },
        ].map(({ value, label }) => (
          <div
            key={label}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
          >
            <span style={{ fontSize: 36, fontWeight: 800, color: '#0a0a0a' }}>{value}</span>
            <span style={{ fontSize: 16, color: '#888' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>,
    { ...size }
  )
}
