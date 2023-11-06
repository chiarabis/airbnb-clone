import React from 'react'
//import yogaLessonImage from '../images/yoga-lesson.jpg'
//import hikingTripImage from '../images/hiking-trip.jpg'
//import divingImage from '../images/diving.jpg'
//import wineTastingImage from '../images/wine-tasting.jpg'
import starRatingIcon from '../images/star-rating.png'

export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {/*{props.openSpots === 0 && <div className='card-badge'>SOLD OUT</div>}*/}
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`${process.env.PUBLIC_URL}/images/${props.item.coverImg}`} alt='images' className='card-image'></img>
            <div className='card-stats'>
                <img src={starRatingIcon} alt='star' className='card-star'></img>
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) •</span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    )
}

/*<div className='card'>
    <img src={hikingTripImage} alt='hiking' className='card-image'></img>
    <div className='card-stats'>
        <img src={starRatingIcon} alt='star' className='card-star'></img>
        <span>4.8</span>
        <span className='gray'>(10) •</span>
        <span className='gray'>Chile</span>
    </div>
    <p>Two hours mountain hike</p>
    <p><span className='bold'>From 20$</span> / person</p>
</div>
<div className='card'>
    <img src={divingImage} alt='diving' className='card-image'></img>
    <div className='card-stats'>
        <img src={starRatingIcon} alt='star' className='card-star'></img>
        <span>4.9</span>
        <span className='gray'>(13) •</span>
        <span className='gray'>Australia</span>
    </div>
    <p>Discover the Great Barrier Reef</p>
    <p><span className='bold'>From 105$</span> / person</p>
</div>
<div className='card'>
    <img src={wineTastingImage} alt='wine-tasting' className='card-image'></img>
    <div className='card-stats'>
        <img src={starRatingIcon} alt='star' className='card-star'></img>
        <span>4.6</span>
        <span className='gray'>(9) •</span>
        <span className='gray'>Italy</span>
    </div>
    <p>A real italian experience</p>
    <p><span className='bold'>From 34$</span> / person</p>
</div>*/