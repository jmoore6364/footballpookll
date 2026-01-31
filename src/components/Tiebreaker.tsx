import { useState } from 'react';
import './Tiebreaker.css';

interface TiebreakerProps {
  value: number | null;
  onChange: (score: number) => void;
  isLocked: boolean;
  mondayGame?: {
    homeTeam: string;
    awayTeam: string;
  };
}

export function Tiebreaker({ value, onChange, isLocked, mondayGame }: TiebreakerProps) {
  const [inputValue, setInputValue] = useState(value?.toString() || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = parseInt(inputValue, 10);
    if (!isNaN(score) && score >= 0 && score <= 150) {
      onChange(score);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d+$/.test(val)) {
      setInputValue(val);
    }
  };

  return (
    <div className={`tiebreaker ${isLocked ? 'locked' : ''}`}>
      <div className="tiebreaker-header">
        <h3>Tiebreaker</h3>
        <p>Predict the total combined score of Monday Night Football</p>
        {mondayGame && (
          <p className="monday-game">
            {mondayGame.awayTeam} @ {mondayGame.homeTeam}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="tiebreaker-form">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={inputValue}
          onChange={handleChange}
          placeholder="Total points"
          disabled={isLocked}
          className="tiebreaker-input"
        />
        {!isLocked && (
          <button type="submit" className="tiebreaker-submit">
            {value !== null ? 'Update' : 'Set'}
          </button>
        )}
      </form>

      {value !== null && (
        <div className="tiebreaker-value">
          Your prediction: <strong>{value} points</strong>
        </div>
      )}
    </div>
  );
}
