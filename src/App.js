import React from 'react'
import Navbar from './components/Navbar.js'
import Intro from './components/Intro.js'
import Card from './components/Card.js'
import data from './data.js'

export default function App(){
    const cards = data.map(item => {
        return (
            <Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            price={item.price}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Intro />

            <section className='cards-container'>
                {cards}
            </section>
        </div>
    )
}

/*<Card 
img='./images/yoga-lesson.jpg'
rating='4.7'
reviewCount={6}
country='Thailandia'
title='One hour for meditation and yoga'
price={16}
/>

<Card
img='./images/hiking-trip.jpg'
rating='4.8'
reviewCount={10}
country='Chile'
title='Two hours mountain hike'
price={20}
/>

<Card
img='./images/diving.jpg'
rating='4.9'
reviewCount={13}
country='Australia'
title='Discover the Great Barrier Reef'
price={105}
/>

<Card
img='./images/wine-tasting.jpg'
rating='4.6'
reviewCount={9}
country='Italy'
title='A real italian experience'
price={34}
/>*/