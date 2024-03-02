import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemTile from './ItemTile';
import '../styles/components/Listing.css';

const Listing = ({list, title}) => {
  return (
    <div className='listingContainer'>
      {list.map((el, indx)=>{
        return <ItemTile key={'listingContainer'+el.title+indx} title={title} el={el} indx={indx} append={"_2"}/>
      })}
    </div>
  )
}

export default Listing
