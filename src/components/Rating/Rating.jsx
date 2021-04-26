import React from 'react'

const Rating = (props) => {
    return (
        <div className="rating">
            <span><i style={{color: props.color}} className={props.value >= 1 ? 'fas fa-star' : 'far fa-star' }></i></span>
            <span><i style={{color: props.color}} className={props.value >= 2 ? 'fas fa-star' : 'far fa-star' }></i></span>
            <span><i style={{color: props.color}} className={props.value >= 3 ? 'fas fa-star' : 'far fa-star' }></i></span>
            <span><i style={{color: props.color}} className={props.value >= 4 ? 'fas fa-star' : 'far fa-star' }></i></span>
            <span><i style={{color: props.color}} className={props.value >= 5 ? 'fas fa-star' : 'far fa-star' }></i></span><br /><br />
            <span>{props.description && props.description}</span>
        </div>
    )
}

export default Rating
