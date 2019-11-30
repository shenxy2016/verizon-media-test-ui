const initialState = (() => {
  const arr = [];
  for(let i = 0; i< 5; i++){
    const obj = {
      id: i,
      img: [
        "https://images.beautifulhalo.com/images/v/201810/I/1539654987943.jpg",
        "https://secure.img1-fg.wfcdn.com/im/76398612/resize-h800-w800%5Ecompr-r85/7284/72844965/Ackerly+5-Light+LED+Kitchen+Island+Pendant.jpg",
        "https://secure.img1-fg.wfcdn.com/im/98105092/resize-h500-w500%5Ecompr-r85/8829/88299838/default_name.jpg",
        "https://secure.img1-fg.wfcdn.com/im/01990027/resize-h800-w800%5Ecompr-r85/6964/69647231/Isabel+9-Light+Kitchen+Island+Cylinder+Pendant.jpg"
      ],
      imgId: 0,
      productName: "Orren Ellis" + "----" + i,
      price: String(Math.floor(Math.random() * Math.floor(10000))),
      rating: String(Math.floor(Math.random() * Math.floor(6))),
      liked: Math.floor(Math.random() * Math.floor(2)) === 1
    };
    arr.push(obj)
  }
  return arr;
})()


const itemLists = (state = initialState, action) => {
  switch (action.type) {
    case "LIKE_OR_DISLIKE":
      return state.map(item =>
        item.id === action.id
          ? {
              ...item,
              liked: !item.liked
            }
          : item
      );
    default:
      return state;
  }
};

export default itemLists;
