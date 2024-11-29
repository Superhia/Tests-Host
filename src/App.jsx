import React, { useState } from 'react'
import Select from 'react-select'
import { profiles, valuePropositions } from './data/profiles'
import MessagePreview from './components/MessagePreview'
import './index.css'

export default function App() {
  const [selectedProfile, setSelectedProfile] = useState(null)

  const handleProfileChange = (selected) => {
    setSelectedProfile(selected)
  }

  return (
    <div className="container">
      <header className="app-header">
        <h1>Employer Branding Message Generator</h1>
      </header>

      <div className="message-generator">
        <div className="profile-selector">
          <h2>Select Candidate Profile</h2>
          <Select
            options={profiles}
            value={selectedProfile}
            onChange={handleProfileChange}
            placeholder="Choose a profile..."
          />
        </div>

        {selectedProfile && (
          <MessagePreview
            profile={selectedProfile}
            content={valuePropositions[selectedProfile.value]}
          />
        )}
      </div>
    </div>
  )
}
