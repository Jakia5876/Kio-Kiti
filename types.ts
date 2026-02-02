
export interface TrainingService {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  image: string;
  bestseller?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
