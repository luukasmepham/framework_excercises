import React from 'react'

export default function Products(props) {
    return (
        <div className='productTiles'>
            {props.products.map((item, key) => (
              <div key={key}>
                <div className='imageField'>
                <img src={item.image}/>
                </div>
                <h4><a href="">{item.title}</a></h4>
                <h2>{item.price}</h2>
                <p id='star'>{item.rating}</p>
              </div>
            ))}
        </div>
    )
}
