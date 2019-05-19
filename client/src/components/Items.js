import React,{Component} from 'react';
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";

class Items extends Component {
  
  render() {

    console.log(this.props.items)
    return this.props.items.map((item) => (
      <ItemCard key={item.id} item={item} saveFavorite={this.props.saveFavorite} />
    ));
  }
} 

//PropTypes
Items.propTypes = {
  items: PropTypes.array.isRequired
}

export default Items;