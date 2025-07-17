import React from 'react'
import './offer.css'

export default function Offer() {
  return (
    <div className="service-section">
        <h2>Programs I Offer</h2>
        <div className="services">
          <div className="card">
            <h3>Fat Loss</h3>
            <p>High-intensity training + meal plans to burn stubborn fat.</p>
          </div>
          <div className="card">
            <h3>Muscle Gain</h3>
            <p>
              Build lean muscle through strength training & progressive
              overload.
            </p>
          </div>
          <div className="card">
            <h3>Online Coaching</h3>
            <p>
              Workout with me from anywhere. Weekly check-ins & real-time
              tracking.
            </p>
          </div>
        </div>
      </div>
  )
}
