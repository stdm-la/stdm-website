export const COOKIE_CONSENT_NAME = 'cookie_consent'
export const COOKIE_CONSENT_VALUE = 'accepted'
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

export function isCookieConsentAccepted(value: string | undefined | null): boolean {
  return value === COOKIE_CONSENT_VALUE
}

/** Persist the visitor's acknowledgement. Separate from the language cookie. */
export function persistCookieConsent() {
  document.cookie = `${COOKIE_CONSENT_NAME}=${COOKIE_CONSENT_VALUE}; path=/; max-age=${ONE_YEAR_SECONDS}; SameSite=Lax`
  try {
    localStorage.setItem(COOKIE_CONSENT_NAME, COOKIE_CONSENT_VALUE)
  } catch {
    // The cookie is enough for the next visit.
  }
}

export function hasStoredCookieConsent(): boolean {
  try {
    return localStorage.getItem(COOKIE_CONSENT_NAME) === COOKIE_CONSENT_VALUE
  } catch {
    return false
  }
}
