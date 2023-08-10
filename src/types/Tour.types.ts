interface Location {
  type: string;
  coordinates: number[];
  _id: string;
  description: string;
  day: number;
}

interface Guide {
  role: string;
  _id: string;
  name: string;
  email: string;
  photo: string;
}

export interface Tour {
  startLocation: {
    type: string;
    description: string;
    coordinates: number[];
    address: string;
  };
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  createdAt: string;
  startDates: string[];
  guides: Guide[];
  _id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  locations: Location[];
  slug: string;
  durationWeeks: number;
  id: string;
}