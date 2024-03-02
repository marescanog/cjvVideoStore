import React from 'react'
import '../styles/components/Featured.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Featured = ({title, featuredList}) => {
  return (
    <div className="universal_container">
      <div className="featured_container">
        <h2>{title}</h2>
        {featuredList && Array.isArray(featuredList) && featuredList.length > 0 ?
          <div className="featured_card_container">
            {featuredList.map((el, indx)=>{
              return <Card key={"crd"+el.id+title+indx} className='featured_card_style' as={Link} to={'/details/'+el.id}>
                <div className={"featured_overlay"}>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>
                <div className={el?.promoType ? (
                                  el?.promoType == "Free with Ads" ? "featured_top_card_free" :
                                  ( el?.promoType == "Early Access" ? "featured_top_card_early" :
                                  "featured_top_card_theater")
                                ) : "no_featured_top_card" }>
                  <p>{el?.promoType}</p>
                </div>
              <Card.Img variant="top" src={el.posterImage} className='featured_img_style'/>
            </Card>
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
