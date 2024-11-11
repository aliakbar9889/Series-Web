import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: 'JUNGLE BEAT',
    img: '/1  (4).png',
    desc: "The lovable creatures of this African jungle are born to be wild. Learning to grow and adapt to their fascinating environment, each will try to navigate its way through a quirky predicament."
  },
  {
    id: 1,
    title: 'LOUIE',
    img: '/1  (5).png',
    desc: "Louie is an animated series featuring a young boy's adventures, emphasizing friendship, teamwork, and fun. With colorful characters and engaging stories, it captivates children with humor and heartwarming lessons."
  },
  {
    id: 2,
    title: 'THE EXPLORER',
    img: '/1  (3).png',
    desc: "The Explorer is an animated series that follows a curious young adventurer exploring diverse cultures and landscapes. Through engaging storytelling, it teaches problem-solving, teamwork, and the importance of curiosity in learning.",
  },
  {
    id: 3,
    title: '64 ZOO LANE',
    img: '/1  (2).png',
    desc: '"64 Zoo Lane" is an animated series featuring a young girl named Lucy who visits her zoo neighbors at night. Each episode shares stories from the animals, teaching valuable lessons about friendship',
  },
  {
    id: 4,
    title: 'CODE NAME: SWIFT',
    img: '/1  (1).png',
    desc: '"Code Name: Swift" is an animated series about a young spy and his friends on secret missions. They use teamwork and clever gadgets to solve problems, showcasing bravery, friendship, and fun adventures.'
  },
]

const Main3: React.FC = () => {
  return (
    <div id="kids-section"className='container pt-32'>
      <h2 className='section-heading'><b><i>KIDS.</i></b></h2> {/* Add this line for the heading */}
      <Heading title='' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Main3;





