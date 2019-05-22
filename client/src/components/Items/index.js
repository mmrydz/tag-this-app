import React,{Component} from 'react';
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import "./style.css";
// import Navbar from "../components/Navbar";

class Items extends Component {

  render() {

    const allItems = (
      <div>
        {this.props.items.map((item) =>
        <ItemCard key={item.id} item={item} />
        )}
      </div>
    );

    const isFeatured = (
      <div>
        {this.props.items.map((item) =>
          {return item.featured ? (<ItemCard key={item.id} item={item} />) : null
          } 
        )}
      </div>

    );
    
    return (

      <div className="items-section">
        {/* <Navbar /> */}
        {/* Feature Section */}
        <div className="feature-div">
          <h1 className="feature-text">* * * Featured Items * * *</h1>
          <div className='feature-display'> {isFeatured}</div>
        </div>

        {/* All Items listed section */}
        <div className="allItems-section">
          <h1 className='allItems-text'>All Items</h1>
          <div className='items-display'>{allItems}</div>
        </div>

      </div>
    )    
  }
} 

//PropTypes
Items.propTypes = {
  items: PropTypes.array.isRequired
}

///////////////////////////////////////////////////////
// Feature Items Display Area CSS
// const featureSection = {
  
//   backgroundImage: 'linear-gradient(to right, #021B79, #0575E6, #045de9, #0575E6, #021B79)',
// }

// const featureDisplay = {
//   margin: 'auto',
//   width: '33%',
//   padding: '10px',
  
// } 

// const featureText = {
//   textAlign: 'center',
//   letterSpacing: '9px',
//   color: '#00DF38',
//   textShadow: '2px 2px 4px #000000',
//   border: '6px ridge #00DF38',
//   backgroundImage: 'linear-gradient(to right, #021B79, #0575E6, #045de9, #0575E6, #021B79)'
// }
// //////////////////////////////////////////////////////////

// // All Items Display Area CSS

// /////////////////////////////////////////////////////////
// const allItemsSection = {
//   backgroundImage: 'linear-gradient(to right, #021B79, #0575E6, #045de9, #0575E6, #021B79)',

// }

// const allItemsDisplay = {
//   margin: 'auto',
//   width: '33%',
//   padding: '5px',
  
// } 

// const allItemsText = {
//   textAlign: 'center',
//   letterSpacing: '9px',
//   color: '#00DF38',
//   textShadow: '2px 2px 4px #000000',
//   border: '10px ridge #00DF38',
//   backgroundImage: 'linear-gradient(to right, #021B79, #0575E6, #045de9, #0575E6, #021B79)'
// }


export default Items;
