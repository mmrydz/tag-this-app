import React from "react";

export function Input(props) {
  return (
    // <div className="form-group">
    <input className="form-control" {...props} />
    // </div>
  );
}

export function CategoryInput(props) {
  return (
    <div className="form-group">
      <label>Category</label>
      <select className="form-control" {...props}>
        <option>Select Category</option>
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
  );
}

export function QualityInput(props) {
  return (
    <div className="form-group">
      <label>Quality</label>
      <select className="form-control" {...props}>
        <option>Select Quality</option>
        <option>New</option>
        <option>Great</option>
        <option>Good</option>
        <option>Poor</option>
      </select>
    </div>
  );
}

export function FeaturedInput(props) {
  return (
    <div className="form-group">
      <label>Featured?</label>
      <select className="form-control" {...props}>
        <option>False</option>
        <option>True</option>
      </select>
    </div>
  );
}

export function FormBtn(props) {
  return <button {...props}>{props.children}</button>;
}
