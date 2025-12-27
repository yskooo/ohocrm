
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  challenges: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  rating: number;
}
