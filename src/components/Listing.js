import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../styles/components/Listing.css';

const Listing = ({list}) => {
  return (
    <div className='listingContainer'>
      {list.map((el, indx)=>{
        return <Card key={"crd"+el.id+indx} className='featured_card_style_2' as={Link} to={'/details/'+el.id}>
        <div className={"featured_overlay_2"}>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
        </div>
        <div className={el?.promoType ? (
                          el?.promoType == "Free with Ads" ? "featured_top_card_free_2" :
                          ( el?.promoType == "Early Access" ? "featured_top_card_early_2" :
                          "featured_top_card_theater_2")
                        ) : "no_featured_top_card_2" }>
          <p>{el?.promoType}</p>
        </div>
      <Card.Img variant="top" src={el.posterImage} className='featured_img_style'/>
    </Card>
      })}
    </div>
  )
}

export default Listing
