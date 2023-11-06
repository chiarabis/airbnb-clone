import React from 'react'
import starRatingIcon from '../images/star-rating.png'

export default function Card(props){
    return (
        <div className='card'>
            <img src={props.img} alt='yoga-lesson' className='card-image'></img>
            <div className='card-stats'>
                <img src={starRatingIcon} alt='star' className='card-star'></img>
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) •</span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}
