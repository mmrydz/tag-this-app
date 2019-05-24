import React, { Component } from "react";
import "./style.css";

class Categories extends Component {

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

render() {

  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-12">
    <div className="form-group">
    <label htmlFor="category-input"></label>
    <select className="form-control" className="selectdropdown" id="category-input">
      <option>Search by Category</option>
      <option value="Baby Furniture">Baby Furniture</option>
      <option value="Bikes">Bikes</option>
      <option value="Books">Books</option>
      <option value="Boats">Boats</option>
      <option value="Boutique">Boutique</option>
      <option value="Cars">Cars</option>
      <option value="Collectibles">Collectibles</option>
      <option value="Electronics">Electronics</option>
      <option value="Furniture">Furniture</option>
      <option value="Housewares">Housewares</option>
      <option value="Lawn Tools">Lawn Tools</option>
      <option value="Linens">Linens</option>
      <option value="Musical Instruments">Musical Instruments</option>
      <option value="Outdoor Furniture">Outdoor Furniture</option>
      <option value="Pictures/Artwork">Pictures/Artwork</option>
      <option value="Rugs">Rugs</option>
      <option value="Sporting Goods">Sporting Goods</option>
      <option value="Tools">Tools</option>
      <option value="Toys">Toys</option>
    </select>
  </div>
  </div>
  </div>
  </div>

  )
  }
}
export default Categories;