import React from 'react'

export default function MessagePreview({ profile, content }) {
  const copyToClipboard = () => {
    const message = `
Job Profile: ${profile.label}

Benefits:
${content.benefits.map(benefit => `• ${benefit}`).join('\n')}

Culture & Values:
${content.culture.map(value => `• ${value}`).join('\n')}
    `.trim()

    navigator.clipboard.writeText(message)
      .then(() => alert('Message copied to clipboard!'))
      .catch(err => console.error('Failed to copy message:', err))
  }

  return (
    <div className="message-section">
      <h2>Message Preview for {profile.label}</h2>
      
      <div className="preview">
        <h3>Benefits</h3>
        <ul className="benefits-list">
          {content.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <h3>Culture & Values</h3>
        <ul className="culture-list">
          {content.culture.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>

        <button onClick={copyToClipboard} className="copy-button">
          Copy Message
        </button>
      </div>
    </div>
  )
}
