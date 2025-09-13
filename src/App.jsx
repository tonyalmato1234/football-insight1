import React from 'react';

export default function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1>⚽ Football Insight</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>
        Data-driven football predictions with 84%+ accuracy last month.
      </p>

      <h2>🔥 This Week’s Top Pick</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
        <strong>Liverpool vs Tottenham — Over 2.5 Goals</strong><br />
        Confidence: 87% | Why? Both teams scored 3+ goals in 5 of their last 6 matches. 
        Liverpool averages 2.8 goals at home. Tottenham conceded 2+ in 6 of 7 away games.
      </p>

      <a href="https://gum.co/yourproduct" target="_blank" style={{
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#0066cc',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '6px',
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '30px'
      }}>
        🚀 Unlock All Weekly Predictions — $9.99/month
      </a>

      <p style={{ fontSize: '12px', color: '#999', marginTop: '50px' }}>
        *Predictions based on stats, not luck. Bet responsibly.
      </p>
    </div>
  );
}
