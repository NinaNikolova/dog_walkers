import React from 'react';
import './WalletView.css';

export default function WalletView({ language }) {
  return (
    <div className="wallet-container">
      <h2 className="wallet-title">
        {language === 'bg' ? 'Портфейл' : 'Wallet'}
      </h2>
      <div className="wallet-balance">50.00 BGN</div>
      <div className="payment-options">
        <button className="payment-button card-button">
          {language === 'bg' ? 'Плати с карта' : 'Pay with Card'}
        </button>
        <button className="payment-button bank-button">
          {language === 'bg' ? 'Плати с банка' : 'Pay with Bank'}
        </button>
        <button className="payment-button revolut-button">
          {language === 'bg' ? 'Плати с Revolut' : 'Pay with Revolut'}
        </button>
      </div>
    </div>
  );
}
