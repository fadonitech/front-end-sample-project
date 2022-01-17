// log the pageview with their URL
export const pageview = (url) => {
  if (
    typeof window !== 'undefined' && window.gtag
  ) {
    window.gtag('config', process.env.SECRET_API_KEY_GOOGLE_ANALYTICS, {
      app_name: 'FadoniTech Website',
      page_path: url,
    })
  }
}

// log specific events happening.
export const event = ({ action, params }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      ...params
    })
  }
}