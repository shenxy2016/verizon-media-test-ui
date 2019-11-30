import React, { useState } from "react";

const Item = props => {
  const { id, img, productName, price, rating, liked, handleLikes } = props;
  const [imgIdx, setState] = useState(0);
  const star = rating => {
    const starArr = [];
    for (let i = parseInt(rating); i > 0; i--) {
      starArr.push(<i class="material-icons md-18">star</i>);
    }
    if (parseInt(rating) !== parseFloat(rating)) {
      starArr.push(<i class="material-icons md-18">star_half</i>);
    }
    while (starArr.length < 5) {
      starArr.push(<i class="material-icons md-18">star_border</i>);
    }
    return starArr;
  };
  const handleImg = bool => {
    if (bool) {
      setState((img.length * 100 + 1 + imgIdx) % img.length);
    } else {
      setState((img.length * 100 - 1 + imgIdx) % img.length);
    }
  };
  return (
    <div className="item">
      <ul className="item-detail">
        <li className="item-detail-img">
          <img src={img[imgIdx]} />
          <div className="item-detail-img-dicount">80% Off</div>
          <button className="left" onClick={() => handleImg(false)}>
            <i class="material-icons md-18">keyboard_arrow_left</i>
          </button>
          <button className="right" onClick={() => handleImg(true)}>
            <i class="material-icons md-18">keyboard_arrow_right</i>
          </button>
        </li>
        <li className="item-detail-name">{productName}</li>
        <li className="item-detail-price">{`$${parseFloat(price / 100).toFixed(
          2
        )}`}</li>
        <li className="item-detail-rating">{star(rating)}</li>
        <li className="item-detail-like" onClick={() => handleLikes(id)}>
          <i class="material-icons">{liked ? "favorite" : "favorite_border"}</i>
        </li>
      </ul>
    </div>
  );
};

export default Item;
