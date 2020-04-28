import React from 'react'
import {connect} from 'react-redux'
import {postProduct} from '../../store/products'
class ProductForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      color: 'red',
      animal: 'pig',
      price: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addProduct(this.state)
  }

  render() {
    const {name, color, animal, price, description} = this.state
    return (
      // todo: add img upload
      <div className="w-50 mt-5 mx-auto">
        <h3>Add Product</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group d-block">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              className="form-control"
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              placeholder="Mr. Bojangles"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              className="form-control"
              type="number"
              value={price}
              onChange={this.handleChange}
              name="price"
              placeholder="Enter a price in cents"
            />
            <small>I'm sorry</small>
          </div>
          <div className="form-group">
            <label htmlFor="animal">Animal: </label>
            <select
              id="animal"
              value={animal}
              onChange={this.handleChange}
              name="animal"
            >
              <option value="pig">pig</option>
              <option value="dog">dog</option>
              <option value="cat">cat</option>
              <option value="penguin">penguin</option>
              <option value="alligator">alligator</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="color">Color: </label>
            <select
              id="color"
              value={color}
              onChange={this.handleChange}
              name="color"
            >
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
            </select>
          </div>

          <div className="form-group d-block">
            <label htmlFor="description">Description: </label>
            <textarea
              id="description"
              className="form-control"
              type="textarea"
              value={description}
              onChange={this.handleChange}
              name="description"
              placeholder="What's this puppet's story?"
              row="3"
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  addProduct: product => dispatch(postProduct(product))
})

export default connect(null, mapDispatch)(ProductForm)
