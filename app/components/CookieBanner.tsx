'use client'
import CookieConsent from 'react-cookie-consent'

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceitar todos"
      declineButtonText="Recusar"
      enableDeclineButton
      cookieName="hypehour_consent"
      style={{ background: '#18181b', fontSize: '13px', alignItems: 'center' }}
      buttonStyle={{ background: '#ffffff', color: '#18181b', borderRadius: '6px', padding: '7px 18px', fontWeight: '600', fontSize: '13px' }}
      declineButtonStyle={{ background: 'transparent', border: '1px solid #52525b', color: '#a1a1aa', borderRadius: '6px', padding: '7px 18px', fontSize: '13px' }}
      contentStyle={{ margin: '8px 0' }}
    >
      Este site usa cookies para publicidade e análise de acesso. Ao aceitar, você concorda com nossa{' '}
      <a href="/privacidade" style={{ color: '#a1a1aa', textDecoration: 'underline' }}>Política de Privacidade</a>.
    </CookieConsent>
  )
}
