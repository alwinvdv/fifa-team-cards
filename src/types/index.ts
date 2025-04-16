   export interface PlayerCard {
     id: string;
     name: string;
     position: string;
     rating: number;
     pace: number;
     shooting: number;
     passing: number;
     dribbling: number;
     defending: number;
     physical: number;
     photoUri: string;
     teamId: string;
   }

   export interface Team {
     id: string;
     name: string;
     players: PlayerCard[];
   }
