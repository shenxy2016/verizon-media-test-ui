import React from "react";
import { connect } from "react-redux";
import Items from "./components/items";
import { likeOrDislike } from "./actions";
import Modal from "./components/modal";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Items
          itemList={this.props.itemLists}
          handleLikes={this.props.handleLikes}
        />
        <div className="modal"><Modal itemList={this.props.itemLists}/></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemLists: state.itemLists
});

const mapDispatchToProps = dispatch => ({
  handleLikes: id => dispatch(likeOrDislike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
