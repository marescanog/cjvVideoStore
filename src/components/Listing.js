import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemTile from './ItemTile';
import '../styles/components/Listing.css';

const Listing = ({list, title, type}) => {
  return (
    <div className={list && Array.isArray(list) && list.length > 0 ? 'listingContainer' : 'listingContainerEmpty'}>
      {
        list && Array.isArray(list) && list.length > 0 ?
        (
          list.map((el, indx)=>{
            return <ItemTile key={'listingContainer'+el.title+indx} title={title} el={el} indx={indx} append={"_2"} type={type??'movies'}/>
          })
        )
        :
        <div className='listingContainerEmpty'>
          <p>No {title} results for filter</p>
        </div>
      }
    </div>
  )
}

export default Listing;
