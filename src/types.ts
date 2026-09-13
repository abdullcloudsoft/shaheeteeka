export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceNote: string;
  image: string;
  category: 'bbq' | 'karahi' | 'bread';
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconName: 'flame' | 'sparkles' | 'utensils' | 'map-pin';
}
