interface Origin {
  name: string;
}

export interface Character {
  id: number;
  name: string;
  gender: string;
  origin: Origin;
  image: string;
  episode: string[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}
