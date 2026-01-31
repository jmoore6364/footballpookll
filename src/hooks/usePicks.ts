import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { NFLGame } from '../types';

interface PicksState {
  [week: number]: {
    [gameId: string]: string; // gameId -> selectedTeamId
  };
}

interface UserProfile {
  id: string;
  name: string;
}

export function usePicks() {
  const [picks, setPicks] = useLocalStorage<PicksState>('nfl-pool-picks', {});
  const [userProfile, setUserProfile] = useLocalStorage<UserProfile | null>('nfl-pool-user', null);
  const [tiebreakerScore, setTiebreakerScore] = useLocalStorage<{ [week: number]: number }>('nfl-pool-tiebreaker', {});

  const makePick = useCallback((week: number, gameId: string, teamId: string) => {
    setPicks(prev => ({
      ...prev,
      [week]: {
        ...prev[week],
        [gameId]: teamId,
      },
    }));
  }, [setPicks]);

  const removePick = useCallback((week: number, gameId: string) => {
    setPicks(prev => {
      const weekPicks = { ...prev[week] };
      delete weekPicks[gameId];
      return {
        ...prev,
        [week]: weekPicks,
      };
    });
  }, [setPicks]);

  const getPickForGame = useCallback((week: number, gameId: string): string | null => {
    return picks[week]?.[gameId] || null;
  }, [picks]);

  const getPicksForWeek = useCallback((week: number): { [gameId: string]: string } => {
    return picks[week] || {};
  }, [picks]);

  const getPickCount = useCallback((week: number): number => {
    return Object.keys(picks[week] || {}).length;
  }, [picks]);

  const calculateScore = useCallback((week: number, games: NFLGame[]): number => {
    const weekPicks = picks[week] || {};
    let correct = 0;

    games.forEach(game => {
      if (game.status === 'final' && weekPicks[game.id]) {
        const pickedTeamId = weekPicks[game.id];
        const homeWon = game.homeScore! > game.awayScore!;
        const awayWon = game.awayScore! > game.homeScore!;

        if (homeWon && pickedTeamId === game.homeTeam.id) {
          correct++;
        } else if (awayWon && pickedTeamId === game.awayTeam.id) {
          correct++;
        }
      }
    });

    return correct;
  }, [picks]);

  const setTiebreaker = useCallback((week: number, score: number) => {
    setTiebreakerScore(prev => ({
      ...prev,
      [week]: score,
    }));
  }, [setTiebreakerScore]);

  const getTiebreaker = useCallback((week: number): number | null => {
    return tiebreakerScore[week] ?? null;
  }, [tiebreakerScore]);

  const updateUserProfile = useCallback((name: string) => {
    const profile: UserProfile = {
      id: userProfile?.id || `user-${Date.now()}`,
      name,
    };
    setUserProfile(profile);
  }, [userProfile, setUserProfile]);

  const clearAllPicks = useCallback((week: number) => {
    setPicks(prev => {
      const newPicks = { ...prev };
      delete newPicks[week];
      return newPicks;
    });
  }, [setPicks]);

  return {
    picks,
    userProfile,
    makePick,
    removePick,
    getPickForGame,
    getPicksForWeek,
    getPickCount,
    calculateScore,
    tiebreakerScore,
    setTiebreaker,
    getTiebreaker,
    updateUserProfile,
    clearAllPicks,
  };
}
