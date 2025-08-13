import React from 'react';
import Image from 'next/image';

// অনুগ্রহ করে আপনার আসল ছবির ফাইলের নাম ও alt টেক্সট দিয়ে এগুলো পরিবর্তন করে নিন
const cardData = [
  { id: 1, imgSrc: '/images/1.jpeg', alt: 'Feature 1' },
  { id: 2, imgSrc: '/images/2.jpeg', alt: 'Feature 2' },
  { id: 3, imgSrc: '/images/3.jpeg', alt: 'Feature 3' },
  { id: 4, imgSrc: '/images/4.jpeg', alt: 'Feature 4' },
  { id: 5, imgSrc: '/images/5.jpeg', alt: 'Feature 5' },
  { id: 6, imgSrc: '/images/6.jpeg', alt: 'Feature 6' },
  { id: 7, imgSrc: '/images/7.jpeg', alt: 'Feature 7' },
  { id: 8, imgSrc: '/images/8.jpeg', alt: 'Feature 8' },
];

const CardSection = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {cardData.map((card) => (
                        <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="relative h-80 w-full">
                                <Image
                                    src={card.imgSrc}
                                    alt={card.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardSection;