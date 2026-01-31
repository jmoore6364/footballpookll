import type { NFLTeam } from '../types';

export const nflTeams: NFLTeam[] = [
  // AFC East
  { id: 'buf', name: 'Bills', abbreviation: 'BUF', city: 'Buffalo', conference: 'AFC', division: 'East', primaryColor: '#00338D', secondaryColor: '#C60C30' },
  { id: 'mia', name: 'Dolphins', abbreviation: 'MIA', city: 'Miami', conference: 'AFC', division: 'East', primaryColor: '#008E97', secondaryColor: '#FC4C02' },
  { id: 'ne', name: 'Patriots', abbreviation: 'NE', city: 'New England', conference: 'AFC', division: 'East', primaryColor: '#002244', secondaryColor: '#C60C30' },
  { id: 'nyj', name: 'Jets', abbreviation: 'NYJ', city: 'New York', conference: 'AFC', division: 'East', primaryColor: '#125740', secondaryColor: '#FFFFFF' },

  // AFC North
  { id: 'bal', name: 'Ravens', abbreviation: 'BAL', city: 'Baltimore', conference: 'AFC', division: 'North', primaryColor: '#241773', secondaryColor: '#9E7C0C' },
  { id: 'cin', name: 'Bengals', abbreviation: 'CIN', city: 'Cincinnati', conference: 'AFC', division: 'North', primaryColor: '#FB4F14', secondaryColor: '#000000' },
  { id: 'cle', name: 'Browns', abbreviation: 'CLE', city: 'Cleveland', conference: 'AFC', division: 'North', primaryColor: '#311D00', secondaryColor: '#FF3C00' },
  { id: 'pit', name: 'Steelers', abbreviation: 'PIT', city: 'Pittsburgh', conference: 'AFC', division: 'North', primaryColor: '#FFB612', secondaryColor: '#101820' },

  // AFC South
  { id: 'hou', name: 'Texans', abbreviation: 'HOU', city: 'Houston', conference: 'AFC', division: 'South', primaryColor: '#03202F', secondaryColor: '#A71930' },
  { id: 'ind', name: 'Colts', abbreviation: 'IND', city: 'Indianapolis', conference: 'AFC', division: 'South', primaryColor: '#002C5F', secondaryColor: '#A2AAAD' },
  { id: 'jax', name: 'Jaguars', abbreviation: 'JAX', city: 'Jacksonville', conference: 'AFC', division: 'South', primaryColor: '#101820', secondaryColor: '#D7A22A' },
  { id: 'ten', name: 'Titans', abbreviation: 'TEN', city: 'Tennessee', conference: 'AFC', division: 'South', primaryColor: '#0C2340', secondaryColor: '#4B92DB' },

  // AFC West
  { id: 'den', name: 'Broncos', abbreviation: 'DEN', city: 'Denver', conference: 'AFC', division: 'West', primaryColor: '#FB4F14', secondaryColor: '#002244' },
  { id: 'kc', name: 'Chiefs', abbreviation: 'KC', city: 'Kansas City', conference: 'AFC', division: 'West', primaryColor: '#E31837', secondaryColor: '#FFB81C' },
  { id: 'lv', name: 'Raiders', abbreviation: 'LV', city: 'Las Vegas', conference: 'AFC', division: 'West', primaryColor: '#000000', secondaryColor: '#A5ACAF' },
  { id: 'lac', name: 'Chargers', abbreviation: 'LAC', city: 'Los Angeles', conference: 'AFC', division: 'West', primaryColor: '#0080C6', secondaryColor: '#FFC20E' },

  // NFC East
  { id: 'dal', name: 'Cowboys', abbreviation: 'DAL', city: 'Dallas', conference: 'NFC', division: 'East', primaryColor: '#003594', secondaryColor: '#869397' },
  { id: 'nyg', name: 'Giants', abbreviation: 'NYG', city: 'New York', conference: 'NFC', division: 'East', primaryColor: '#0B2265', secondaryColor: '#A71930' },
  { id: 'phi', name: 'Eagles', abbreviation: 'PHI', city: 'Philadelphia', conference: 'NFC', division: 'East', primaryColor: '#004C54', secondaryColor: '#A5ACAF' },
  { id: 'was', name: 'Commanders', abbreviation: 'WAS', city: 'Washington', conference: 'NFC', division: 'East', primaryColor: '#5A1414', secondaryColor: '#FFB612' },

  // NFC North
  { id: 'chi', name: 'Bears', abbreviation: 'CHI', city: 'Chicago', conference: 'NFC', division: 'North', primaryColor: '#0B162A', secondaryColor: '#C83803' },
  { id: 'det', name: 'Lions', abbreviation: 'DET', city: 'Detroit', conference: 'NFC', division: 'North', primaryColor: '#0076B6', secondaryColor: '#B0B7BC' },
  { id: 'gb', name: 'Packers', abbreviation: 'GB', city: 'Green Bay', conference: 'NFC', division: 'North', primaryColor: '#203731', secondaryColor: '#FFB612' },
  { id: 'min', name: 'Vikings', abbreviation: 'MIN', city: 'Minnesota', conference: 'NFC', division: 'North', primaryColor: '#4F2683', secondaryColor: '#FFC62F' },

  // NFC South
  { id: 'atl', name: 'Falcons', abbreviation: 'ATL', city: 'Atlanta', conference: 'NFC', division: 'South', primaryColor: '#A71930', secondaryColor: '#000000' },
  { id: 'car', name: 'Panthers', abbreviation: 'CAR', city: 'Carolina', conference: 'NFC', division: 'South', primaryColor: '#0085CA', secondaryColor: '#101820' },
  { id: 'no', name: 'Saints', abbreviation: 'NO', city: 'New Orleans', conference: 'NFC', division: 'South', primaryColor: '#D3BC8D', secondaryColor: '#101820' },
  { id: 'tb', name: 'Buccaneers', abbreviation: 'TB', city: 'Tampa Bay', conference: 'NFC', division: 'South', primaryColor: '#D50A0A', secondaryColor: '#34302B' },

  // NFC West
  { id: 'ari', name: 'Cardinals', abbreviation: 'ARI', city: 'Arizona', conference: 'NFC', division: 'West', primaryColor: '#97233F', secondaryColor: '#000000' },
  { id: 'lar', name: 'Rams', abbreviation: 'LAR', city: 'Los Angeles', conference: 'NFC', division: 'West', primaryColor: '#003594', secondaryColor: '#FFA300' },
  { id: 'sf', name: '49ers', abbreviation: 'SF', city: 'San Francisco', conference: 'NFC', division: 'West', primaryColor: '#AA0000', secondaryColor: '#B3995D' },
  { id: 'sea', name: 'Seahawks', abbreviation: 'SEA', city: 'Seattle', conference: 'NFC', division: 'West', primaryColor: '#002244', secondaryColor: '#69BE28' },
];

export const getTeamById = (id: string): NFLTeam | undefined => {
  return nflTeams.find(team => team.id === id);
};

export const getTeamByAbbreviation = (abbr: string): NFLTeam | undefined => {
  return nflTeams.find(team => team.abbreviation === abbr);
};
