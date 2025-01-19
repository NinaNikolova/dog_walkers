import React, { useState } from 'react';
import './Feedback.css';

const Feedback = ({ language, onClose }) => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // Integrate feedback submission to an API here
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h3 className="feedback-title">{language === 'bg' ? 'Обратна връзка' : 'Feedback'}</h3>
        <button onClick={onClose} className="feedback-close-button">
          {language === 'bg' ? 'Затвори' : 'Close'}
        </button>
      </div>
      {submitted ? (
        <div className="feedback-thank-you">
          <p>{language === 'bg' ? 'Благодарим за обратната връзка!' : 'Thank you for your feedback!'}</p>
        </div>
      ) : (
        <div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={language === 'bg' ? 'Моля, споделете вашите мисли...' : 'Please share your thoughts...'}
            className="feedback-textarea"
          />
          <div className="feedback-actions">
            <button onClick={handleSubmit} className="feedback-submit-button">
              {language === 'bg' ? 'Изпратете обратна връзка' : 'Submit Feedback'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
