import type { NFLGame } from '../types';
import { getTeamById } from './teams';

const createGame = (
  id: string,
  week: number,
  homeId: string,
  awayId: string,
  gameDate: string,
  gameTime: string,
  homeScore: number | null = null,
  awayScore: number | null = null,
  status: 'scheduled' | 'in_progress' | 'final' = 'scheduled',
  spread?: number
): NFLGame => {
  const homeTeam = getTeamById(homeId)!;
  const awayTeam = getTeamById(awayId)!;

  return {
    id,
    week,
    season: 2025,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    gameDate,
    gameTime,
    status,
    spread,
  };
};

// Sample Week 1 Schedule
export const week1Games: NFLGame[] = [
  createGame('wk1-1', 1, 'kc', 'bal', '2025-09-04', '8:20 PM ET', 27, 20, 'final', -3),
  createGame('wk1-2', 1, 'phi', 'gb', '2025-09-05', '8:15 PM ET', 34, 29, 'final', -2.5),
  createGame('wk1-3', 1, 'atl', 'pit', '2025-09-07', '1:00 PM ET', 18, 10, 'final', -3),
  createGame('wk1-4', 1, 'buf', 'ari', '2025-09-07', '1:00 PM ET', 34, 28, 'final', -6.5),
  createGame('wk1-5', 1, 'chi', 'ten', '2025-09-07', '1:00 PM ET', 24, 17, 'final', -4),
  createGame('wk1-6', 1, 'cin', 'ne', '2025-09-07', '1:00 PM ET', 16, 10, 'final', -8),
  createGame('wk1-7', 1, 'ind', 'hou', '2025-09-07', '1:00 PM ET', 29, 27, 'final', 3),
  createGame('wk1-8', 1, 'jax', 'mia', '2025-09-07', '1:00 PM ET', 17, 20, 'final', 3.5),
  createGame('wk1-9', 1, 'no', 'car', '2025-09-07', '1:00 PM ET', 47, 10, 'final', -4),
  createGame('wk1-10', 1, 'nyg', 'min', '2025-09-07', '1:00 PM ET', 6, 28, 'final', 1.5),
  createGame('wk1-11', 1, 'lac', 'lv', '2025-09-07', '4:05 PM ET', 22, 10, 'final', -3),
  createGame('wk1-12', 1, 'sea', 'den', '2025-09-07', '4:05 PM ET', 26, 20, 'final', -5.5),
  createGame('wk1-13', 1, 'cle', 'dal', '2025-09-07', '4:25 PM ET', 17, 33, 'final', 2.5),
  createGame('wk1-14', 1, 'sf', 'nyj', '2025-09-07', '4:25 PM ET', 32, 19, 'final', -4.5),
  createGame('wk1-15', 1, 'det', 'lar', '2025-09-07', '8:20 PM ET', 26, 20, 'final', -6.5),
  createGame('wk1-16', 1, 'tb', 'was', '2025-09-08', '8:20 PM ET', 37, 20, 'final', -3),
];

// Sample Week 2 Schedule (current week - in progress)
export const week2Games: NFLGame[] = [
  createGame('wk2-1', 2, 'buf', 'mia', '2025-09-11', '8:15 PM ET', 31, 10, 'final', -5.5),
  createGame('wk2-2', 2, 'bal', 'lv', '2025-09-14', '1:00 PM ET', null, null, 'scheduled', -8.5),
  createGame('wk2-3', 2, 'car', 'lac', '2025-09-14', '1:00 PM ET', null, null, 'scheduled', 6),
  createGame('wk2-4', 2, 'dal', 'no', '2025-09-14', '1:00 PM ET', null, null, 'scheduled', -5.5),
  createGame('wk2-5', 2, 'det', 'tb', '2025-09-14', '1:00 PM ET', null, null, 'scheduled', -6),
  createGame('wk2-6', 2, 'gb', 'ind', '2025-09-14', '1:00 PM ET', null, null, 'scheduled', -3.5),
  createGame('wk2-7', 2, 'hou', 'chi', '2025-09-14', '1:00 PM ET', null, null, 'scheduled', -6.5),
  createGame('wk2-8', 2, 'nyj', 'ten', '2025-09-14', '1:00 PM ET', null, null, 'scheduled', -4),
  createGame('wk2-9', 2, 'was', 'nyg', '2025-09-14', '1:00 PM ET', null, null, 'scheduled', -3),
  createGame('wk2-10', 2, 'ari', 'ne', '2025-09-14', '4:05 PM ET', null, null, 'scheduled', -5.5),
  createGame('wk2-11', 2, 'lac', 'pit', '2025-09-14', '4:05 PM ET', null, null, 'scheduled', 1),
  createGame('wk2-12', 2, 'den', 'cin', '2025-09-14', '4:25 PM ET', null, null, 'scheduled', 2.5),
  createGame('wk2-13', 2, 'kc', 'cin', '2025-09-14', '4:25 PM ET', null, null, 'scheduled', -5.5),
  createGame('wk2-14', 2, 'lar', 'ari', '2025-09-14', '4:25 PM ET', null, null, 'scheduled', -3.5),
  createGame('wk2-15', 2, 'sf', 'min', '2025-09-14', '8:20 PM ET', null, null, 'scheduled', -4),
  createGame('wk2-16', 2, 'atl', 'phi', '2025-09-15', '8:15 PM ET', null, null, 'scheduled', 3.5),
];

// All weeks combined
export const allGames: NFLGame[] = [...week1Games, ...week2Games];

export const getGamesByWeek = (week: number): NFLGame[] => {
  return allGames.filter(game => game.week === week);
};

export const getCurrentWeek = (): number => {
  return 2; // Simulating we're in week 2
};

export const getAvailableWeeks = (): number[] => {
  const weeks = new Set(allGames.map(game => game.week));
  return Array.from(weeks).sort((a, b) => a - b);
};
