import star from "../images/star.png";

function Card({card}) {
    let badgeText;
    if (card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (card.location === 'online') {
        badgeText = "ONLINE"
    }
    return ( 
        <div className="card" >
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={card.img} alt="katie" className="card--image" />
            <div className="card--info">
                <img src={star} alt="star" className="card--info--star" />
                <span>{card.rating}</span>
                <span className="gray">({card.reviewCount}) .</span>
                <span className="gray">{card.country} </span>
                <span className="gray"> {card.location}</span>
            </div>
            <p>{card.title}</p>
            <p><span className="bold">From ${card.price}</span> / person</p>
        </div>
    )
}

export default Card;