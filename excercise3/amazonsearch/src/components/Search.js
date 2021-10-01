import React from 'react'

export default function Search(props) {
    return (
        <div className="searchField">
        <p> Search </p>
        <input type="search" 
               className="textField" 
               value = {props.value}
               onChange={props.onchange}/>
      </div>
    )
}
