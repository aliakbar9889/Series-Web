// Main2.tsx
import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: 'LITTLE ARCHER: ISKENDER-VICTORY',
    img: '/sikandar2.png',
    desc: '"LITTLE ARCHER: ISKENDER-VICTORY" is a fictional or symbolic title likely referring to a narrative or artwork depicting the legendary figure of Iskender (Alexander the Great) as a youthful archer achieving victory. It represents themes of bravery, skill, and conquest, often celebrated in literature and art across various cultures.',
  },
  {
    id: 1,
    title: 'LITTLE ARCHER: ISKENDER 1071',
    img: '/sikandar1.png',
    desc: '"LITTLE ARCHER: ISKENDER 1071" likely refers to a narrative or artistic representation of Iskender (Alexander the Great) as a young archer, symbolizing skill and leadership. The year 1071 is significant due to the Battle of Manzikert, where the Seljuk Turks, led by Alp Arslan, defeated the Byzantine Empire.',
  },
  {
    id: 2,
    title: 'HIS NAME IS YUNUS',
    img: '/name.png',
    desc: '"HIS NAME IS YUNUS" is a phrase that can refer to various cultural or artistic works highlighting the life and teachings of Yunus Emre, a celebrated Turkish poet and Sufi mystic of the 13th century. His poetry emphasizes love, spirituality, and unity, profoundly influencing Turkish literature and culture.',
  },
  {
    id: 3,
    title: 'THE LAST LETTER',
    img: '/last letter.png',
    desc: '"The Last Letter" is a poignant narrative or artistic work that often explores themes of love, loss, and farewell. It typically conveys the emotional weight of a final message, reflecting the deep connections between individuals and the lasting impact of words left behind, resonating across time and memory.',
  },
  {
    id: 4,
    title: 'SALADDIN AYYUBI ',
    img: '/saladdin.png',
    desc: 'In 1187, Salahuddin Ayubi led a decisive campaign to reclaim Jerusalem from the Crusaders. After years of conflict, he orchestrated a brilliant military strategy, culminating in the Battle of Hattin. His forces defeated the Crusaders, leading to the capture of Jerusalem.',
  },
  {
    id: 5,
    title: 'SARUHAN: SCARS OF BETRAYAL',
    img: '/saruhan.png',
    desc: 'It is the beginning of the 17th century. The prince who is about to become the sultan in the future is on his way towards Saruhan and a murder is committed in Saruhan. One of Saruhan\'s important people, Salih’s son Yusuf is killed in.',
  },
  {
    id: 6,
    title: "THE LAST BIRD",
    img: "/bird.png",
    desc: "Bekir, a merchant in Istanbul, decides to move to his village to hunt in the forest to relax, but the villagers fear the misfortune that illegal hunting brings. What happens with Bakir when he faces unfortunate events since he arrived in the village?",
  },
];

const Main2: React.FC = () => {
  return (
    <div id="movies-section" className='container pt-32'>
      <h2 className='section-heading'><b><i>MOVIES.</i></b></h2> {/* Add this line for the heading */}
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

export default Main2;
