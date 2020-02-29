export interface dishItems {
  Category: string;
  Cuisine: string;
  Name: string;
  Rating: number | null;
}

export interface dishStateItems {
  // Category: string;
  // Cuisine: string;
  // Name: string;
  // Rating: number | null;
  Dishes: dishItems[];
  ErrorMessage: string;
}
