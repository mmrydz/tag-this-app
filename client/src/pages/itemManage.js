import React, { Component } from "react";
import {
  Input,
  CategoryInput,
  QualityInput,
  FormBtn
} from "../components/ManageItem/newindex";
import API from "../utils/API";
import Alert from "../components/Alert/index";
import axios from "axios";

class ManageItemPage extends Component {
  state = {
    items: [],
    barcode: "",
    itemName: "",
    price: "",
    category: "",
    quality: "",
    featured: false,
    notes: "",
    submitted: false,
    file: null,
    fileUrl: "",
    filename: ""
  };

  handleFileUpload = e => {
    const file = e.target.files[0]
    this.setState({
      fileUrl: URL.createObjectURL(file),
      file: e.target.files,
      filename: file.name
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitFile = event => {
    event.persist();
    const formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios
      .post(`/test-upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        // handle your response;
        console.log("it worked!", response);
        this.handleFormSubmit(event);
      })
      .catch(error => {
        // handle your error
        console.log("it did not work", error);
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.barcode);
    let fixFileName = this.state.filename.split(' ').join('+');
    console.log(fixFileName);
    if (this.state.barcode) {
      API.saveItem({
        barcode: this.state.barcode,
        itemName: this.state.itemName,
        price: this.state.price,
        category: this.state.category,
        quality: this.state.quality,
        featured: this.state.featured,
        image: `https://s3.amazonaws.com/tag-this-app-adoelp/bucketFolder/${fixFileName}`,
        notes: this.state.notes
      })
        .then(res => this.successAlert())
        .catch(err => console.log("this is not working ", err));
    }
  };


  successAlert = () => {
    this.setState({ submitted: true })
    console.log(this.state.submitted);

  }

  render() {
    return (
      <div className="container"> 
        { this.state.submitted ? <Alert /> : null }
        <h3>Manage Items</h3>
        <div className="justify-content-center">
          <form>
            <Input
              type="text"
              value={this.state.barcode}
              onChange={this.handleInputChange}
              name="barcode"
              placeholder="Item Barcode (required)"
              autoFocus
              required
            />
            <Input
              type="text"
              value={this.state.itemName}
              onChange={this.handleInputChange}
              name="itemName"
              placeholder="Item Name"
            />
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input
                value={this.state.price}
                type="number"
                placeholder="Enter price"
                min="0"
                step="0.01"
                data-number-to-fixed="2"
                data-number-stepfactor="100"
                className="form-control currency"
                name="price"
                onChange={this.handleInputChange}
              />
            </div>
            <CategoryInput
              name="category"
              value={this.state.category}
              onChange={this.handleInputChange}
            />
            <QualityInput
              name="quality"
              value={this.state.quality}
              onChange={this.handleInputChange}
            />
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="featured"
                value={this.state.featured}
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" htmlFor="featured-input">
                Featured
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="imagefile">Add an Image</label>
              <input
                type="file"
                className="form-control-file"
                name="image"
                onChange={this.handleFileUpload}
              />
              <img src={this.state.fileUrl} alt="uploaded stuff" />
            </div>
            <div className="form-group">
              <label htmlFor="notes-input">Notes</label>
              <textarea
                className="form-control"
                name="notes "
                rows="3"
                placeholder="Enter notes"
                value={this.state.notes}
                onChange={this.handleInputChange}
              />
            </div>
            <FormBtn
              type="button"
              className="btn btn-primary mr-1"
              onClick={this.submitFile}
              disabled={!(this.state.barcode)}
            >
              Save{" "}
            </FormBtn>
            <FormBtn type="button" className="btn btn-primary mr-1">
              upload image{" "}
            </FormBtn>
            <FormBtn type="button" className="btn btn-primary mt-1">
              Save and Update{" "}
            </FormBtn>
          </form>
        </div>
      </div>
    );
  }
}

export default ManageItemPage;

