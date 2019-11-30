import React from "react";
import Item from "./item";
import "../style/item-list.scss";
function Items(props) {
  return (
    <div className="item-list">
      {props.itemList.map(item => (
        <Item key={item.id} {...item} handleLikes={props.handleLikes} handleImg={props.handleImg}/>
      ))}
    </div>
  );
}

export default Items;
