import React from 'react'
import ItemTile from './ItemTile';
import '../styles/components/Featured.css';


const Featured = ({title, featuredList}) => {
  return (
    <div className="universal_container">
      <div className="featured_container">
        <h2>{title}</h2>
        {featuredList && Array.isArray(featuredList) && featuredList.length > 0 ?
          <div className="featured_card_container">
            {featuredList.map((el, indx)=>{
              return <ItemTile key={title+indx} title={title} el={el} indx={indx}/>
            })}
          </div>
          :
          <div>
            <p>No Shows to Display</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Featured
