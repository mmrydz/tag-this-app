import React, { Component } from "react";
import {
  Input,
  CategoryInput,
  QualityInput,
  FeaturedInput,
  FormBtn,
  DeleteBtn
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
    featured: "",
    notes: "",
    submitted: false,
    file: null,
    fileUrl: "",
    filename: "",
    updating: false,
    url: window.location.search,
    postId: ""
  };

  componentDidMount() {
    var url = window.location.search;
    let postId;

    // var updating = false;

    if (url.indexOf("?post_id=") !== -1) {
      postId = url.split("=")[1];
      this.getPostData(postId);
      //this.updateItem(postId);
    }
  }

  // Gets post data for a post if we're editing
  getPostData = id => {
    console.log(id);
    API.getItem(id)
      .then(res => {
        if (res) {
          // If this post exists, prefill our cms forms with its data
          this.setState({
            barcode: res.data.barcode,
            itemName: res.data.itemName,
            price: res.data.price,
            category: res.data.category,
            quality: res.data.quality,
            featured: res.data.featured,
            notes: res.data.notes,
            // If we have a post with this id, set a flag for us to know to update the post
            // when we hit submit
            updating: true
          })
        }
      })
      .catch(err => console.log(err));
  }

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
    //event.preventDefault();
    console.log("this is updating", this.state.updating);
    
    if (this.state.updating) {
      var url = window.location.search;
      if (url.indexOf("?post_id=") !== -1) {
        this.state.postId = url.split("=")[1];
        //this.getPostData(postId);
        console.log(this.state.postId);
        this.updateItem(this.state.postId);
      }
    }
    else {
      this.submitItem(event);
    }
  };

  submitItem = event => {
    event.preventDefault();
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
        //image: `https://s3.amazonaws.com/tag-this-app-adoelp/bucketFolder/${fixFileName}`,
        notes: this.state.notes
      })
        .then(res => this.successAlert())
        .catch(err => console.log("the submit is not working ", err));
    }
  };

  updateItem = id => {
    console.log(id);
    API.updateItem(id,
      {
        barcode: this.state.barcode,
        itemName: this.state.itemName,
        price: this.state.price,
        category: this.state.category,
        quality: this.state.quality,
        featured: this.state.featured,
        //image: `https://s3.amazonaws.com/tag-this-app-adoelp/bucketFolder/${fixFileName}`,
        notes: this.state.notes
      })
    .then(res => console.log("updateItem actually worked!", res.data))
    .catch(err => console.log("the update is not working ", err));

  }


  successAlert = () => {
    this.setState({ submitted: true })
    console.log(this.state.submitted);

  }

  render() {
    return (
      <div className="container">
        {this.state.submitted ? <Alert /> : null}
        <h3 className="text-center">Manage Items</h3>
        <div className="justify-content-center">
          <form>
            <div className="form-group">
              <label htmlFor="barcode">Barcode</label>
              <Input
                type="text"
                value={this.state.barcode}
                onChange={this.handleInputChange}
                name="barcode"
                id="barcode-input"
                placeholder="Item Barcode (required)"
                autoFocus
                required
              />
              <small className={this.state.barcode ? "" : "red"}>Use the barcode scanner to add the barcode number</small>
            </div>
            <div className="form-group">
              <label htmlFor="itemName">Name</label>
              <Input
                type="text"
                value={this.state.itemName}
                onChange={this.handleInputChange}
                name="itemName"
                placeholder="Item Name"
              />
              <small>Be as descriptive as possible!</small>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">$</div>
                </div>
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
            <FeaturedInput
              name="featured"
              value={this.state.featured}
              onChange={this.handleInputChange}
            />
            <div className="form-group">
              <label htmlFor="imagefile">Image</label>
              <input
                type="file"
                className="form-control-file"
                name="image"
                onChange={this.handleFileUpload}
              />
              <img src={this.state.fileUrl} style={{ width: "25%" }} />
            </div>
            <div className="form-group">
              <label htmlFor="notes-input">Notes</label>
              <textarea
                className="form-control"
                name="notes"
                rows="3"
                placeholder="Enter notes"
                value={this.state.notes}
                onChange={this.handleInputChange}
              />
            </div>
            <FormBtn
              type="button"
              className="btn btn-primary mr-1"
              onClick={this.handleFormSubmit}
              disabled={!(this.state.barcode)}
            >
              Save{" "}
            </FormBtn>
            <FormBtn
              type="submit"
              className="btn btn-primary mr-1"
              onClick={this.handleFormSubmit}
              disabled={!(this.state.barcode)}
            >
              Save and Create New{" "}
            </FormBtn>
            {/* <FormBtn type="button" className="btn btn-primary mt-1">
              Save and Update{" "}
            </FormBtn> */}
            <FormBtn 
            type="submit"
            className="btn btn-danger mr-1"
            onClick={this.handleFormSubmit}
            disabled={!(this.state.barcode)}
            >
              Delete{" "}
            </FormBtn>
          </form>
        </div>
      </div>
    );
  }
}

export default ManageItemPage;

