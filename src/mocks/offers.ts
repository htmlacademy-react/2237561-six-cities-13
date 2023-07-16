import {TOffer} from '../types/offer';

const OFFER_PHOTO_URL = 'https://13.design.pages.academy/static/hotel';

export const offers: TOffer[] =
[{
  id: '22d6ee6c-dc4c-4bba-942d-b60117a8be5e',
  title: 'The Joshua Tree House',
  type: 'hotel',
  price: 408,
  previewImage: `${OFFER_PHOTO_URL}?rnd=${Math.random()}`,
  city: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
  location: {
    latitude: 51.239402000000005,
    longitude: 6.756314000000001,
    zoom: 16
  },
  isFavorite: false,
  isPremium: true,
  rating: 2.9
},
{
  id: 'b23619ea-d7d3-41ac-82d6-325a95c10249',
  title: 'Canal View Prinsengracht',
  type: 'apartment',
  price: 274,
  previewImage: `${OFFER_PHOTO_URL}?rnd=${Math.random()}`,
  city: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
  location: {
    latitude: 51.243402,
    longitude: 6.791314,
    zoom: 16
  },
  isFavorite: false,
  isPremium: false,
  rating: 1.5
},
{
  id: '60b35051-10c2-4540-813e-f111a54f1081',
  title: 'The house among olive ',
  type: 'apartment',
  price: 184,
  previewImage: `${OFFER_PHOTO_URL}?rnd=${Math.random()}`,
  city: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
  location: {
    latitude: 51.214402,
    longitude: 6.764314000000001,
    zoom: 16,
  },
  isFavorite: false,
  isPremium: true,
  rating: 1.8,
},
{
  id: '3b494864-9313-436c-bf3a-b9ee4e4071ac',
  title: 'House in countryside',
  type: 'house',
  price: 442,
  previewImage: `${OFFER_PHOTO_URL}?rnd=${Math.random()}`,
  city: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    }
  },
  location: {
    latitude: 51.225402,
    longitude: 6.784314,
    zoom: 16,
  },
  isFavorite: false,
  isPremium: true,
  rating: 2.4,
}
];
