import React from "react"
// styles
import "./ContactBar.css"

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z" />
  </svg>
)

/**
 * Email and phone as icons that widen to reveal the detail on hover or
 * keyboard focus. On touch, where there is no hover, they render open
 * permanently — the phone number must never be hidden from the visitor most
 * likely to ring it.
 */
function ContactBar() {
  return (
    <div className="contact-bar">
      <a className="contact-chip" href="mailto:maeveobyrne1961@gmail.com">
        <MailIcon />
        <span className="contact-chip-label">maeveobyrne1961@gmail.com</span>
        <span className="visually-hidden">Email Maeve O'Byrne</span>
      </a>
      <a className="contact-chip" href="tel:00353872843571">
        <PhoneIcon />
        <span className="contact-chip-label">+353 87 284 3571</span>
        <span className="visually-hidden">Call Maeve O'Byrne</span>
      </a>
    </div>
  )
}

export default ContactBar
