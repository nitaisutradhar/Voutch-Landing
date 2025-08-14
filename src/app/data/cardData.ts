export interface Card {
  id: number;
  imgSrc: string;
  eventName: string;
  date: string;
  location: string;
  button: {
    text: string;
    link: string;
  };
}

export const cardData: Card[] = [
  {
    id: 1,
    imgSrc: '/images/1.jpeg',
    eventName: 'COLUMBUS WEEKEND',
    date: 'September 11', 
    location: 'WASHINGTON D.C.',
    button: { text: 'Join the Waitlist', link: '#' },
    },
  {
    id: 2,
    imgSrc: '/images/2.jpeg',
    eventName: 'NIGHT SOCIETY PRESENTS',
    date: 'October 9',
    location: 'COLUMBUS',
    button: { text: 'Join the Waitlist', link: '#' },
    },
  {
    id: 3,
    imgSrc: '/images/3.jpeg',
    eventName: 'THE WHITE PARTY',
    date: 'AUGUST 26',
    location: 'WASHINGTON D.C.',
    button: { text: 'Join the Waitlist', link: '#' },
  },
  {
    id: 4,
    imgSrc: '/images/4.jpeg',
    eventName: 'NIGHT SOCIETY & UNLIMITED PRESENTS',
    date: 'AUGUST 30',
    location: 'WASHINGTON D.C.',
    button: { text: 'Join the Waitlist', link: '#' },
  },
];