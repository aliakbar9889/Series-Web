import React from 'react';

interface CardProps {
    title: string;
    desc: string;
    img: string;
}

const Card: React.FC<CardProps> = ({ title, desc, img }) => {
    return (
        <div className='card'>
            <img src={img} alt={title} className='card-img' />
            <h3 className='card-title'>{title}</h3>
            <p className='card-desc'>{desc}</p>
            <button className='watch-now-button'>WATCH NOW</button>
        </div>
    );
};

export default Card;
