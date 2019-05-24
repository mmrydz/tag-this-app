import React, { Component } from "react";
import ItemCard from "../components/ItemCard";
import API from "../utils/API";

class Items extends Component {
  state = { items: [] };

  loadItems = () => {
    API.getItems()
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadItems();
  }

  render() {
    return (
      <ItemCard items={this.state.items} />
      
    )
}
}
export default Items;
