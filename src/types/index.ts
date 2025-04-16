export interface Team {
  id: string;
  name: string;
  createdAt: Date;
  adminId: string;
  inviteCode: string;
  isComplete: boolean; // true when all players have created their cards
}

export interface Player {
  id: string;
  teamId: string;
  name: string;
  email?: string;
  hasCreatedCard: boolean;
  inviteAccepted: boolean;
}

export interface PlayerCard {
  id: string;
  playerId: string;
  teamId: string;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  number?: number;
  photoUri: string;
  stats: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
  cardStyle: 'regular' | 'gold' | 'special';
  isRevealed: boolean; // false until someone gets it in a pack
}

export interface Pack {
  id: string;
  teamId: string;
  type: 'daily' | 'bonus' | 'premium';
  cards: number; // number of cards in the pack
}

export interface Collection {
  userId: string;
  teamId: string;
  cards: {
    cardId: string;
    obtainedAt: Date;
    isNew: boolean;
  }[];
}

export type RootStackParamList = {
  Home: undefined;
  CreateTeam: undefined;
  TeamSetup: { teamId: string };
  CreateCard: { teamId: string; playerId: string };
  TeamCollection: { teamId: string };
  PackOpening: { packId: string };
  PlayerList: { teamId: string };
};