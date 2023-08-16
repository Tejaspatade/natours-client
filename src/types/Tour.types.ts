interface Location {
  type: string;
  coordinates: [number, number];
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

interface User {
  _id: string;
  name: string;
  photo: string;
}

interface Review {
  createdAt: string;
  _id: string;
  review: string;
  rating: number;
  user: User;
  tour: string;
  __v: number;
  id: string;
}

export interface TourCardTypes {
  startLocation: {
    type: string;
    description: string;
    coordinates: [number, number];
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

export interface TourInfo extends TourCardTypes {
  __v: number;
  reviews: Review[];

}