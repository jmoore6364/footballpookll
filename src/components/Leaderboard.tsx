import './Leaderboard.css';

interface LeaderboardEntry {
  rank: number;
  name: string;
  weeklyScore: number;
  totalScore: number;
  isCurrentUser: boolean;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  currentWeek: number;
}

export function Leaderboard({ entries, currentWeek }: LeaderboardProps) {
  const sortedEntries = [...entries].sort((a, b) => {
    if (b.weeklyScore !== a.weeklyScore) {
      return b.weeklyScore - a.weeklyScore;
    }
    return b.totalScore - a.totalScore;
  });

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h2>Week {currentWeek} Standings</h2>
      </div>

      <div className="leaderboard-table">
        <div className="leaderboard-row header-row">
          <span className="rank-col">Rank</span>
          <span className="name-col">Player</span>
          <span className="score-col">Week</span>
          <span className="total-col">Season</span>
        </div>

        {sortedEntries.map((entry, index) => (
          <div
            key={entry.name}
            className={`leaderboard-row ${entry.isCurrentUser ? 'current-user' : ''} ${index < 3 ? `top-${index + 1}` : ''}`}
          >
            <span className="rank-col">
              {index === 0 && '🥇'}
              {index === 1 && '🥈'}
              {index === 2 && '🥉'}
              {index > 2 && (index + 1)}
            </span>
            <span className="name-col">{entry.name}</span>
            <span className="score-col">{entry.weeklyScore}</span>
            <span className="total-col">{entry.totalScore}</span>
          </div>
        ))}

        {entries.length === 0 && (
          <div className="leaderboard-empty">
            No participants yet. Be the first to make your picks!
          </div>
        )}
      </div>
    </div>
  );
}
