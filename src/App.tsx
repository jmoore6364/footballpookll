import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { WeekSelector } from './components/WeekSelector';
import { GameCard } from './components/GameCard';
import { Leaderboard } from './components/Leaderboard';
import { Tiebreaker } from './components/Tiebreaker';
import { usePicks } from './hooks/usePicks';
import { getGamesByWeek, getCurrentWeek, getAvailableWeeks } from './data/schedule';
import './App.css';

// Sample leaderboard data (in a real app, this would come from a backend)
const sampleLeaderboardData = [
  { name: 'Mike T.', weeklyScore: 12, totalScore: 24 },
  { name: 'Sarah K.', weeklyScore: 11, totalScore: 23 },
  { name: 'John D.', weeklyScore: 11, totalScore: 21 },
  { name: 'Lisa M.', weeklyScore: 10, totalScore: 22 },
  { name: 'Chris P.', weeklyScore: 10, totalScore: 19 },
  { name: 'Amy R.', weeklyScore: 9, totalScore: 20 },
];

function App() {
  const currentWeek = getCurrentWeek();
  const availableWeeks = getAvailableWeeks();
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);

  const {
    userProfile,
    makePick,
    getPickForGame,
    getPickCount,
    calculateScore,
    getTiebreaker,
    setTiebreaker,
    updateUserProfile,
  } = usePicks();

  const games = useMemo(() => getGamesByWeek(selectedWeek), [selectedWeek]);
  const totalGames = games.length;
  const pickCount = getPickCount(selectedWeek);
  const score = calculateScore(selectedWeek, games);
  const tiebreakerValue = getTiebreaker(selectedWeek);

  // Check if week is locked (past the deadline - for demo, week 1 is locked)
  const isWeekLocked = selectedWeek < currentWeek;

  // Find Monday night game for tiebreaker
  const mondayGame = games.find(g => g.gameDate.includes('Monday') || g.gameDate.includes('-08') || g.gameDate.includes('-15'));

  // Build leaderboard entries
  const leaderboardEntries = useMemo(() => {
    const entries = sampleLeaderboardData.map((entry, index) => ({
      rank: index + 1,
      ...entry,
      isCurrentUser: false,
    }));

    // Add current user if they have a name
    if (userProfile?.name) {
      entries.push({
        rank: entries.length + 1,
        name: userProfile.name,
        weeklyScore: score,
        totalScore: score, // In real app, would sum all weeks
        isCurrentUser: true,
      });
    }

    return entries;
  }, [userProfile, score]);

  const handleMakePick = (gameId: string, teamId: string) => {
    makePick(selectedWeek, gameId, teamId);
  };

  const handleSetTiebreaker = (value: number) => {
    setTiebreaker(selectedWeek, value);
  };

  return (
    <div className="app">
      <Header
        userName={userProfile?.name || null}
        onUpdateName={updateUserProfile}
        pickCount={pickCount}
        totalGames={totalGames}
        score={score}
      />

      <WeekSelector
        weeks={availableWeeks}
        currentWeek={currentWeek}
        selectedWeek={selectedWeek}
        onSelectWeek={setSelectedWeek}
      />

      <main className="main-content">
        <div className="content-grid">
          <section className="games-section">
            <div className="section-header">
              <h2>Week {selectedWeek} Games</h2>
              {isWeekLocked && (
                <span className="locked-badge">Picks Locked</span>
              )}
            </div>

            <div className="games-grid">
              {games.map(game => (
                <GameCard
                  key={game.id}
                  game={game}
                  selectedTeamId={getPickForGame(selectedWeek, game.id)}
                  onSelectTeam={(teamId) => handleMakePick(game.id, teamId)}
                  isLocked={isWeekLocked}
                />
              ))}
            </div>

            {!isWeekLocked && (
              <Tiebreaker
                value={tiebreakerValue}
                onChange={handleSetTiebreaker}
                isLocked={isWeekLocked}
                mondayGame={mondayGame ? {
                  homeTeam: mondayGame.homeTeam.name,
                  awayTeam: mondayGame.awayTeam.name,
                } : undefined}
              />
            )}
          </section>

          <aside className="sidebar">
            <Leaderboard
              entries={leaderboardEntries}
              currentWeek={selectedWeek}
            />

            <div className="pool-info">
              <h3>Pool Rules</h3>
              <ul>
                <li>Pick the winner of each game</li>
                <li>1 point for each correct pick</li>
                <li>Picks lock at game time</li>
                <li>Tiebreaker: MNF total score</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <footer className="footer">
        <p>NFL Pool Sheet - Make your picks and compete with friends!</p>
        <p className="pwa-hint">Install this app on your device for the best experience</p>
      </footer>
    </div>
  );
}

export default App;
