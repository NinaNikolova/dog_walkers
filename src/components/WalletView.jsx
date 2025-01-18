import React from 'react'

export default function WalletView({language}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        {language === 'bg' ? 'Портфейл' : 'Wallet'}
      </h2>
      <div className="text-3xl font-bold text-green-600">50.00 BGN</div>
    </div>
  );
}
