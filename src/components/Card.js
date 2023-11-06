import React from 'react'
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
