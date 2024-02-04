import {CDN_URL} from '../../utils/constants';

const RestaurentCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData.info; 

    return(
        <div className="res-card">
            <img
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
      />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo}</h4>
            <h4>{sla?.deliveryTime}</h4>
        </div>
    )
}

export default RestaurentCard;