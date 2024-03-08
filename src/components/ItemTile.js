import React from 'react'
import Card from 'react-bootstrap/Card';
import Random from 'random-string-alphanumeric-generator';
import { Link } from 'react-router-dom';

const ItemTile = ({title, append, el, indx, type}) => {
  return (
    <Card key={(title??"")+Random.randomAlphanumeric(6, "lowercase")+indx} className={`featured_card_style${append??""}`} as={Link} to={'/details/'+(type??'movies')+'/'+el.id}>
        <div className={`featured_overlay${append??""}`}>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
        </div>
        <div className={el?.promoType ? (
                            el?.promoType == "Free with Ads" ? `featured_top_card_free${append??""}` :
                            ( el?.promoType == "Early Access" ? `featured_top_card_early${append??""}` :
                            ( el?.promoType == "Home Theatre" ? `featured_top_card_early${append??""}` :
                            `no_featured_top_card${append??""}`) )
                        ) : `no_featured_top_card${append??""}` }>
            <p>{el?.promoType}</p>
        </div>
        <Card.Img variant="top" src={el.posterImage} className={`featured_img_style`}/>
    </Card>
  )
}

export default ItemTile
