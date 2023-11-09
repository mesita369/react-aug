import { IMG_URL } from "../utilities/constants";
const RestCard = ({ cardData }) => {
    //console.log(cardData);
    let { info: { name } } = cardData;
    let { info: { avgRating: rating } } = cardData;
    let { info: { cuisines } } = cardData;
    let { info: { cloudinaryImageId: imageId } } = cardData;
    let { info: { aggregatedDiscountInfoV3: discount } } = cardData
    console.log(discount);
    return (<div className="rest-card">
        <div style={{position:"relative"}}>
            <img className="rest-img" src={IMG_URL + imageId}></img>
            <p className="discount-txt">{discount?.header + discount?.subHeader}</p>
        </div>

        <p>
            {name}
        </p>
        <p>{rating ? rating : 0} Rating</p>
        <p>{cuisines.join()}</p>
    </div>)
}


export default RestCard;




