import {TOffer} from '../types/offer';

export const offers: TOffer[] =
[
  {
    id: 'eb3901e8-d005-4627-aa1f-e49afc2ae2c4',
    title: 'Wood and stone place',
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: 'room',
    price: 293,
    images: [
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/10.jpg',
      'https://13.design.pages.academy/static/hotel/18.jpg'
    ],
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.225402,
      longitude: 6.784314,
      zoom: 16
    },
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Coffee machine',
      'Breakfast'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 3.6,
    bedrooms: 1,
    maxAdults: 3
  },
  {
    id: 'e86874cd-5554-462a-b4ec-bbc1ee0e0e1a',
    title: 'Canal View Prinsengracht',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'room',
    price: 213,
    images: [
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/7.jpg',
      'https://13.design.pages.academy/static/hotel/15.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    goods: [
      'Towels',
      'Coffee machine',
      'Breakfast',
      'Fridge',
      'Laptop friendly workspace',
      'Washing machine',
      'Wi-Fi',
      'Air conditioning',
      'Dishwasher',
      'Washer'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 3.5,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: 'd27bd684-172f-4bf9-a04b-8e54e91e297e',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'apartment',
    price: 241,
    images: [
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/18.jpg'
    ],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.959361,
      longitude: 6.978974,
      zoom: 16
    },
    goods: [
      'Washer',
      'Wi-Fi',
      'Laptop friendly workspace',
      'Kitchen',
      'Breakfast',
      'Cable TV',
      'Baby seat'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 1.6,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: '1ffba0ba-c9dd-4993-bd70-0465e245c1a0',
    title: 'The Pondhouse - A Magical Place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'house',
    price: 393,
    images: [
      'https://13.design.pages.academy/static/hotel/18.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg'
    ],
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.217402,
      longitude: 6.7693140000000005,
      zoom: 16
    },
    goods: [
      'Towels',
      'Washing machine',
      'Coffee machine',
      'Fridge',
      'Baby seat',
      'Wi-Fi',
      'Kitchen',
      'Breakfast',
      'Cable TV',
      'Air conditioning',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.3,
    bedrooms: 4,
    maxAdults: 4
  }
];
