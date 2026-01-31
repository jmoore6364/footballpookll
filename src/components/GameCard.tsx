import type { NFLGame } from '../types';
import './GameCard.css';

interface GameCardProps {
  game: NFLGame;
  selectedTeamId: string | null;
  onSelectTeam: (teamId: string) => void;
  isLocked: boolean;
}

export function GameCard({ game, selectedTeamId, onSelectTeam, isLocked }: GameCardProps) {
  const { homeTeam, awayTeam, homeScore, awayScore, gameTime, gameDate, status, spread } = game;

  const isHomeWinner = status === 'final' && homeScore !== null && awayScore !== null && homeScore > awayScore;
  const isAwayWinner = status === 'final' && homeScore !== null && awayScore !== null && awayScore > homeScore;

  const isHomeSelected = selectedTeamId === homeTeam.id;
  const isAwaySelected = selectedTeamId === awayTeam.id;

  const isPickCorrect = (teamId: string) => {
    if (status !== 'final') return null;
    if (teamId === homeTeam.id && isHomeWinner) return true;
    if (teamId === awayTeam.id && isAwayWinner) return true;
    return false;
  };

  const handleTeamClick = (teamId: string) => {
    if (!isLocked && status === 'scheduled') {
      onSelectTeam(teamId);
    }
  };

  const formatSpread = (spread: number | undefined, isHome: boolean) => {
    if (spread === undefined) return null;
    const teamSpread = isHome ? spread : -spread;
    if (teamSpread === 0) return 'PK';
    return teamSpread > 0 ? `+${teamSpread}` : teamSpread.toString();
  };

  return (
    <div className={`game-card ${status}`}>
      <div className="game-header">
        <span className="game-date">{gameDate}</span>
        <span className="game-time">{status === 'final' ? 'Final' : status === 'in_progress' ? 'Live' : gameTime}</span>
      </div>

      <div className="teams-container">
        {/* Away Team */}
        <div
          className={`team-row ${isAwaySelected ? 'selected' : ''} ${isAwayWinner ? 'winner' : ''} ${
            isAwaySelected && isPickCorrect(awayTeam.id) === true ? 'correct' : ''
          } ${isAwaySelected && isPickCorrect(awayTeam.id) === false ? 'incorrect' : ''}`}
          onClick={() => handleTeamClick(awayTeam.id)}
          style={{ '--team-color': awayTeam.primaryColor } as React.CSSProperties}
        >
          <div className="team-info">
            <div
              className="team-color-bar"
              style={{ backgroundColor: awayTeam.primaryColor }}
            />
            <span className="team-city">{awayTeam.city}</span>
            <span className="team-name">{awayTeam.name}</span>
            {spread !== undefined && (
              <span className="team-spread">{formatSpread(spread, false)}</span>
            )}
          </div>
          <div className="team-score-section">
            {status !== 'scheduled' && awayScore !== null && (
              <span className="team-score">{awayScore}</span>
            )}
            {isAwaySelected && (
              <span className="pick-indicator">
                {status === 'final' ? (isPickCorrect(awayTeam.id) ? '✓' : '✗') : '★'}
              </span>
            )}
          </div>
        </div>

        <div className="at-symbol">@</div>

        {/* Home Team */}
        <div
          className={`team-row ${isHomeSelected ? 'selected' : ''} ${isHomeWinner ? 'winner' : ''} ${
            isHomeSelected && isPickCorrect(homeTeam.id) === true ? 'correct' : ''
          } ${isHomeSelected && isPickCorrect(homeTeam.id) === false ? 'incorrect' : ''}`}
          onClick={() => handleTeamClick(homeTeam.id)}
          style={{ '--team-color': homeTeam.primaryColor } as React.CSSProperties}
        >
          <div className="team-info">
            <div
              className="team-color-bar"
              style={{ backgroundColor: homeTeam.primaryColor }}
            />
            <span className="team-city">{homeTeam.city}</span>
            <span className="team-name">{homeTeam.name}</span>
            {spread !== undefined && (
              <span className="team-spread">{formatSpread(spread, true)}</span>
            )}
          </div>
          <div className="team-score-section">
            {status !== 'scheduled' && homeScore !== null && (
              <span className="team-score">{homeScore}</span>
            )}
            {isHomeSelected && (
              <span className="pick-indicator">
                {status === 'final' ? (isPickCorrect(homeTeam.id) ? '✓' : '✗') : '★'}
              </span>
            )}
          </div>
        </div>
      </div>

      {status === 'scheduled' && !isLocked && !selectedTeamId && (
        <div className="pick-prompt">Tap a team to make your pick</div>
      )}
    </div>
  );
}
