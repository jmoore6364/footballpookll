export interface NFLTeam {
  id: string;
  name: string;
  abbreviation: string;
  city: string;
  conference: 'AFC' | 'NFC';
  division: 'North' | 'South' | 'East' | 'West';
  primaryColor: string;
  secondaryColor: string;
}

export interface NFLGame {
  id: string;
  week: number;
  season: number;
  homeTeam: NFLTeam;
  awayTeam: NFLTeam;
  homeScore: number | null;
  awayScore: number | null;
  gameTime: string;
  gameDate: string;
  status: 'scheduled' | 'in_progress' | 'final';
  spread?: number;
}

export interface Pick {
  id: string;
  poolId: string;
  gameId: string;
  selectedTeamId: string;
  timestamp: number;
  isCorrect?: boolean;
}

export interface Participant {
  id: string;
  name: string;
  picks: Pick[];
  totalCorrect: number;
  totalPicks: number;
}

export interface WeeklyPool {
  id: string;
  week: number;
  season: number;
  games: NFLGame[];
  participants: Participant[];
  deadline: string;
  isLocked: boolean;
}

export interface PoolSettings {
  currentWeek: number;
  currentSeason: number;
  poolName: string;
  tiebreaker: 'total_points' | 'monday_night_score';
}
