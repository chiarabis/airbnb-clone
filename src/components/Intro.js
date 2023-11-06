import React from 'react'
import acropolisImage from '../intro-images/acropolis.jpg'
import cityImage from '../intro-images/city.jpg'
import cultureImage from '../intro-images/culture.jpg'
import guitarImage from '../intro-images/guitar.jpg'
import spaghettiImage from '../intro-images/spaghetti.jpg'
import swimImage from '../intro-images/swim.jpg'
import peopleImage from '../intro-images/young-people.jpg'
import musicImage from '../intro-images/live-music.jpg'

export default function Main(){
    return (
        <section className='main'>
            <div className='grid-block'>
                <img src={acropolisImage} alt='acropolis'></img>
                <img src={cityImage} alt='city'></img>
                <img src={cultureImage} alt='culture'></img>
                <img src={guitarImage} alt='guitar'></img>
                <img src={spaghettiImage} alt='spaghetti'></img>
                <img src={swimImage} alt='swim'></img>
                <img src={peopleImage} alt='people'></img>
                <img src={musicImage} alt='live-music'></img>
            </div>
            <div className='intro'>
                <h2>Your adventures begin here</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts — our experiences are designed to bring you
                    authentic well-being, meaningful encounters and unforgettable moments around the world.</p>
            </div>
        </section>
    )
}