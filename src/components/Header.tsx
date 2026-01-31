import { useState } from 'react';
import './Header.css';

interface HeaderProps {
  userName: string | null;
  onUpdateName: (name: string) => void;
  pickCount: number;
  totalGames: number;
  score: number;
}

export function Header({ userName, onUpdateName, pickCount, totalGames, score }: HeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(userName || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onUpdateName(nameInput.trim());
      setIsEditing(false);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <span className="logo-icon">🏈</span>
          <h1>NFL Pool Sheet</h1>
        </div>

        <div className="header-stats">
          <div className="stat">
            <span className="stat-value">{pickCount}/{totalGames}</span>
            <span className="stat-label">Picks</span>
          </div>
          <div className="stat">
            <span className="stat-value">{score}</span>
            <span className="stat-label">Correct</span>
          </div>
        </div>

        <div className="header-user">
          {!userName || isEditing ? (
            <form onSubmit={handleSubmit} className="name-form">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter your name"
                className="name-input"
                autoFocus
              />
              <button type="submit" className="name-submit">Save</button>
            </form>
          ) : (
            <div className="user-display" onClick={() => setIsEditing(true)}>
              <span className="user-name">{userName}</span>
              <span className="edit-hint">Edit</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
