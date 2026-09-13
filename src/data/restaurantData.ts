import { MenuItem, GalleryItem, HighlightItem } from '../types';

// Local generated high-definition realistic Pakistani food images
import heroImage from '../assets/images/hero_tikka_bbq_1789302810701.jpg';
import karahiImage from '../assets/images/dish_karahi_1789302824725.jpg';
import seekhKababImage from '../assets/images/dish_seekh_kabab_1789302839203.jpg';
import malaiBotiImage from '../assets/images/dish_malai_boti_1789302852775.jpg';
import bbqPlatterImage from '../assets/images/dish_bbq_platter_1789302864311.jpg';

export const RESTAURANT_INFO = {
  name: 'Shahi Tikka House',
  tagline: 'Authentic Tikka & BBQ, Full of Flavor',
  address: 'Main Commercial Market Rd, Near Subway, Opposite Askari Bank, Satellite Town, Rawalpindi',
  city: 'Rawalpindi',
  area: 'Satellite Town',
  phone1: '+92 300 0341022',
  phone1Clean: '+923000341022',
  phone2: '0326 5348743',
  phone2Clean: '03265348743',
  email: 'shahitikkahouse01@gmail.com',
  whatsappUrl: 'https://wa.me/923000341022',
  facebookUrl: 'https://www.facebook.com/people/Shahi-Tikka-House/61565348192923/',
  instagramUrl: 'https://www.instagram.com/shahi_tikkahouse/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shahi+Tikka+House+Main+Commercial+Market+Rd+Satellite+Town+Rawalpindi',
  heroImage: heroImage,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    description: 'Grilled chicken prepared with traditional spices.',
    priceNote: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80',
    category: 'bbq',
  },
  {
    id: 'beef-tikka',
    name: 'Beef Tikka',
    description: 'Tender beef pieces grilled with flavorful seasoning.',
    priceNote: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    category: 'bbq',
  },
  {
    id: 'seekh-kabab',
    name: 'Seekh Kabab',
    description: 'Juicy minced-meat kabab grilled over heat.',
    priceNote: 'Price on Order',
    image: seekhKababImage,
    category: 'bbq',
  },
  {
    id: 'chicken-boti',
    name: 'Chicken Boti',
    description: 'Flavorful grilled chicken pieces.',
    priceNote: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80',
    category: 'bbq',
  },
  {
    id: 'malai-boti',
    name: 'Malai Boti',
    description: 'Creamy, tender and flavorful chicken boti.',
    priceNote: 'Price on Order',
    image: malaiBotiImage,
    category: 'bbq',
  },
  {
    id: 'chicken-karahi',
    name: 'Chicken Karahi',
    description: 'Classic Pakistani-style chicken karahi.',
    priceNote: 'Price on Order',
    image: karahiImage,
    category: 'karahi',
  },
  {
    id: 'bbq-platter',
    name: 'BBQ Platter',
    description: 'A selection of Pakistani BBQ favorites.',
    priceNote: 'Price on Order',
    image: bbqPlatterImage,
    category: 'bbq',
  },
  {
    id: 'fresh-naan-roti',
    name: 'Fresh Naan & Roti',
    description: 'Freshly prepared bread served with the meal.',
    priceNote: 'Price on Order',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&auto=format&fit=crop&q=80',
    category: 'bread',
  },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'authentic-bbq',
    title: 'Authentic Tikka & BBQ',
    description: 'Traditional charcoal grilling honoring rich Pakistani culinary heritage.',
    iconName: 'flame',
  },
  {
    id: 'pakistani-flavors',
    title: 'Pakistani Flavors',
    description: 'Seasoned with aromatic herbs, roasted whole spices, and balanced masalas.',
    iconName: 'sparkles',
  },
  {
    id: 'fresh-prepared',
    title: 'Freshly Prepared Food',
    description: 'Skewered and prepared hot off the grill upon every order.',
    iconName: 'utensils',
  },
  {
    id: 'convenient-location',
    title: 'Convenient Satellite Town Location',
    description: 'Situated on Main Commercial Market Road, easily accessible in Rawalpindi.',
    iconName: 'map-pin',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-chicken-tikka',
    title: 'Chicken Tikka',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=700&auto=format&fit=crop&q=80',
    caption: 'Grilled spicy chicken tikka seasoned with traditional masalas',
  },
  {
    id: 'gal-seekh-kabab',
    title: 'Seekh Kabab',
    image: seekhKababImage,
    caption: 'Juicy spiced minced meat seekh kababs grilled over hot coals',
  },
  {
    id: 'gal-chicken-boti',
    title: 'Chicken Boti',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&auto=format&fit=crop&q=80',
    caption: 'Flavorful bite-sized chicken skewers charred to perfection',
  },
  {
    id: 'gal-bbq-platter',
    title: 'BBQ Platter',
    image: bbqPlatterImage,
    caption: 'Generous mixed barbecue assortment with fresh condiments',
  },
  {
    id: 'gal-chicken-karahi',
    title: 'Pakistani Karahi',
    image: karahiImage,
    caption: 'Sizzling traditional chicken karahi with ginger and chilies',
  },
  {
    id: 'gal-fresh-naan',
    title: 'Fresh Naan',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=700&auto=format&fit=crop&q=80',
    caption: 'Warm, soft tandoori naan straight out of the clay oven',
  },
];
