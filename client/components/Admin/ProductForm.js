import React from 'react'

class ProductForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      color: '',
      animal: '',
      price: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {name, color, animal, price, description} = this.state
    return (
      <div className="container mt-5">
        <h3>Add Product</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="animal">Animal: </label>
            <input
              className="form-control"
              type="text"
              value={animal}
              onChange={this.handleChange}
              name="animal"
              placeholder="Enter a type of animal"
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color: </label>
            <input
              className="form-control"
              type="text"
              value={color}
              onChange={this.handleChange}
              name="color"
              placeholder="Enter a color"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price: </label>
            <input
              className="form-control"
              type="text"
              value={price}
              onChange={this.handleChange}
              name="price"
              placeholder="Enter a price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <textarea
              className="form-control"
              type="textarea"
              value={description}
              onChange={this.handleChange}
              name="description"
              placeholder="Enter a description"
              row="3"
            ></textarea>
          </div>
          <input type="file" className="form-control-file"></input>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default ProductForm
