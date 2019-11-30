import React from "react";
import "../style/modal.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ showModal: !this.state.showModal });
  }
  filter(list) {
    return list.filter(l => l.liked);
  }
  render() {
    const filterList = this.filter(this.props.itemList);

    return (
      <div className="modal">
        <div className="modal-alert-message" onClick={this.handleClick}>
          {`${filterList.length} products in the wish list`}
        </div>
        {this.state.showModal && <div className="modal-popup">
            <div className="modal-popup-close" onClick={this.handleClick}>X</div>
          <ul>
            {filterList.map(li => (
              <li className="modal-popup-list">
                <div className="modal-popup-list-left">
                  <img src={li.img[0]} />
                </div>
                <div className="modal-popup-list-right">{li.productName}</div>
              </li>
            ))}
          </ul>
        </div>}
      </div>
    );
  }
}

export default Modal;
