import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/products/${props.id}`}><img src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className='items-prices'>
            <div className="item-price-new">
                <span>&#8377;&nbsp;
                </span>{props.new_price}
            </div>
            <div className="item-price-old">
                <span>&#8377;&nbsp;
                </span>{props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item