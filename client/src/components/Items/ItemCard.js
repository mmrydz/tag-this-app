import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./style.css";


class ItemCard extends Component {

  render() {

    // does destructuring need to be used?
    // const { id } = this.props.item;

    return (
      <div>
        <br></br>
        <div className="card">
          <img className="card-img-top" src={this.props.item.image} alt="Card image"/>
          <div className="card-body"></div>
          <h4 className="card-title">{this.props.item.name}</h4>
          <p className="card-text">{this.props.item.description}</p>
          <button className="card-button">Get More Info</button>
          <div className="favorite">
            <input type="checkbox" onChange={this.props.saveFavorite}
            />  Save To Favorites
          </div> 
        </div>
        <br></br>
      </div>
      
    )
  }
}

//Proptypes
ItemCard.propTypes = {
  item: PropTypes.object.isRequired
}

// const cardStyle = {
//   width: '400px',
//   background: '#ff000',
//   border: '10px ridge #00DF38',
//   textAlign: 'center',
// }

// const btnStyle = {
//   background: 'blue',
//   width: '30%',
//   align: 'center',
//   margin: 'auto',
//   textAlign: 'center',
//   color: '#00DF38',
// } 


export default ItemCard;
