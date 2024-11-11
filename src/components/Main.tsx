import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: 'DIRILIS ERTUGRUL',
        img: '/ertugrul.png',
        desc: 'Ertuğrul Ghazi was a 13th-century Turkish warrior and the father of Osman I, the founder of the Ottoman Empire. He led the Kayi tribe against the Mongol invasions and established a foundation for future Ottoman conquests. His legacy is celebrated in Turkish culture and history.',
    },
    {
        id: 1,
        title: 'KURULUS OSMAN',
        img: '/osman.png',
        desc: "Osman Ghazi, also known as Osman I, was the founder of the Ottoman Empire in the late 13th century. He united various Turkish tribes, expanded territories, and established a strong state. His leadership and military prowess laid the groundwork for the empire's future success ",
    },
    {
        id: 2,
        title: 'YUNUS EMRE',
        img: '/yunusemre.png',
        desc: 'Yunus Emre was a 13th-century Turkish poet and mystic. He is considered one of the greatest figures in Turkish literature. Yunus Emre wrote poems in Turkish and Persian, exploring themes of love, spirituality, and human unity. His works are known for their simplicity, sincerity, and deep spiritual insights',
    },
    {
        id: 3,
        title: 'SELAHUDDIN EYYUBI',
        img: '/selahuddin.png',
        desc: 'Salahuddin Ayyubi, also known as Saladin, was a 12th-century Muslim military leader and the first Sultan of Egypt and Syria. Renowned for his leadership during the Crusades, he united Muslim forces and recaptured Jerusalem from the Crusaders in 1187, becoming a symbol of resistance and chivalry in Islamic history.',
    },
    {
        id: 4,
        title: 'SULTAN MEHMED FATIH',
        img: '/MEHMED.png',
        desc: 'Sultan Mehmet II, known as Mehmet the Conqueror (Fatih Sultan Mehmet), was the Ottoman Sultan who captured Constantinople in 1453, marking the end of the Byzantine Empire. His military genius and strategic innovations transformed the Ottoman Empire into a dominant power, establishing Istanbul as its capital and a cultural hub.',

    },
    {
        id: 5,
        title: 'BUYUK SELCUKLU',
        img: '/melikshah.png',
        desc: "Melikshah was the Seljuk Sultan from 1072 to 1092, known for expanding the empire and fostering a golden age in Persian culture. His reign saw significant architectural advancements. His son, Sencer, succeeded him, ruling from 1092 to 1157, and continued efforts to maintain the empire's stability and territorial integrity.",

    },
    {
        id: 6,
        title: "SULTAN ABDUL HAMID",
        img: "/sultan.png",
        desc: "Sultan Abdul Hamid II was the 34th Sultan of the Ottoman Empire, ruling from 1876 to 1909. Known for his autocratic governance, he implemented modernization reforms, including infrastructure and education improvements. His reign faced challenges from nationalist movements, leading to his deposition in a coup, marking the empire's decline.",
    },
    {
        id: 7,
        title: "BARBAROSLAR",
        img: "/bar.png",
        desc: "Hayreddin Barbarossa, the famed Ottoman admiral, had two notable sons: Hasan and Oruç. Hasan served as a naval commander, while Oruç followed in his father's footsteps, commanding naval forces. Both played crucial roles in expanding Ottoman naval power in the Mediterranean during the 16th century.",

    },
    {
        id: 8,
        title: "SULTAN ALP ARSALAN",
        img: "/alp.png",
        desc: "Sultan Alp Arslan was the second Sultan of the Seljuk Empire, reigning from 1063 to 1072. He is renowned for his military leadership, particularly during the Battle of Manzikert in 1071, where he defeated the Byzantine Empire, paving the way for Turkish settlement in Anatolia and significantly expanding Seljuk territory.",

    }
];

const Main: React.FC = () => {
    return (
      <div id="series-section" className='container pt-32'>
        <h2 className='section-heading'><b><i>SERIES.</i></b></h2> {/* Add this line for the heading */}
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
  
  export default Main;




