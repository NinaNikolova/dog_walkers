import React, { useState } from 'react';
import './Feedback.css';  // Include the CSS for styling

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // You can integrate the feedback submission to an API here
  };

  return (
    <div className="feedback-container">
      <h3 className="feedback-title">Feedback</h3>
      {submitted ? (
        <div className="feedback-thank-you">
          <p>Thank you for your feedback!</p>
        </div>
      ) : (
        <div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Please share your thoughts..."
            className="feedback-textarea"
          />
          <div className="feedback-actions">
            <button onClick={handleSubmit} className="feedback-submit-button">
              Submit Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
