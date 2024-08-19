import React from 'react';
import Image from 'next/image';
import Olivia from '../../../public/images/olivia.png';
import Phoenix from '../../../public/images/phoenix.png';
import Lana from '../../../public/images/lana.png';
import Demi from '../../../public/images/demi.png';
import Twit from '../../../public/images/twit.png';
import Link from '../../../public/images/link.png';
import World from '../../../public/images/world.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Olivia Rhye',
      title: 'Founder & CEO',
      description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
      image: Olivia, // Correctly assign the imported image
      twitter: Twit,
      linkedin: Link,
      website: World,
    },
    {
      name: 'Phoenix Baker',
      title: 'Engineering Manager',
      description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
      image: Phoenix,
      twitter: Twit,
      linkedin: Link,
      website: World,
    },
    {
      name: 'Lana Steiner',
      title: 'Product Manager',
      description: 'Former PM for Linear, Lambda School, and On Deck.',
      image: Lana,
      twitter: Twit,
      linkedin: Link,
      website: World,
    },
    {
      name: 'Demi Wilkinson',
      title: 'Frontend Developer',
      description: 'Former frontend dev for Linear, Coinbase, and Postscript.',
      image: Demi,
      twitter: Twit,
      linkedin: Link,
      website: World,
    },

    {
        name: 'Olivia Rhye',
        title: 'Founder & CEO',
        description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
        image: Olivia, // Correctly assign the imported image
        twitter: Twit,
        linkedin: Link,
        website: World,
      },
      {
        name: 'Phoenix Baker',
        title: 'Engineering Manager',
        description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
        image: Phoenix,
        twitter: Twit,
        linkedin: Link,
        website: World,
      },
      {
        name: 'Lana Steiner',
        title: 'Product Manager',
        description: 'Former PM for Linear, Lambda School, and On Deck.',
        image: Lana,
        twitter: Twit,
        linkedin: Link,
        website: World,
      },
      {
        name: 'Demi Wilkinson',
        title: 'Frontend Developer',
        description: 'Former frontend dev for Linear, Coinbase, and Postscript.',
        image: Demi,
        twitter: Twit,
        linkedin: Link,
        website: World,
      },
  ];

  return (
    <main className="flex justify-center">
      <section className="w-[80%] py-10 bg-gray-50 text-center">
        <h2 className="text-green-500 text-xs font-semibold  mb-4">The team</h2>
        <h1 className="text-4xl font-bold mb-6">Meet the team behind Noorcorp</h1>
        <p className="text-[18px] font-[400] mb-12 md:w-[70%] mx-auto text-[#475467]">
          We’re a small team that loves to create great experiences and make meaningful connections between builders and customers. Join our remote team!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-44 object-cover mb-6"
                width={400}
                height={400}
              />
              <h3 className="text-xl font-bold mb-2 text-left">{member.name}</h3>
              <p className="text-[#4F269F] mb-4 text-left text-[16px] font-[400]">{member.title}</p>
              <p className="text-[#475467] font-[400] text-[14px] mb-6 text-left">{member.description}</p>
              <div className="flex justify-start space-x-4">
                <a href="#"><Image src={member.linkedin} alt="LinkedIn" width={24} height={24} /></a>
                <a href="#"><Image src={member.twitter} alt="Twitter" width={24} height={24} /></a>
                <a href="#"><Image src={member.website} alt="Website" width={24} height={24} /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;
