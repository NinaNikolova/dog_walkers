import React from 'react'

export default function User({language}) {
  return (
    <div className="footer-content">
  
        <div className="footer-text">
          {language === 'bg' ? 'Иван' : 'Ivan'}
        </div>
      </div>
  )
}
