const router = require('express').Router()
const Product = require('../db/models/product')

const PER_PAGE = 10

class ProductsList extends React.Component {
  componentDidMount () {
    const query = queryString.parse(this.props.location.search);
    this.props.getProducts(query);
  }
  render () {
    return (
      <>
        <button
          onClick={() => {
            const query = queryString.parse(this.props.location.search);
            query.orderByPrice = 'asc'
            this.props.history.push(`${this.props.location.pathname}${queryString.stringify(query)}`)
            this.props.getProducts(query);
          }}
        >Sort by Price Low to High</button>
        <ol>
          {this.props.products.map(/* a component to render each product */)}
        </ol>
      </>
    )
  }
}

router.get('/', async (req, res, next) => {
  try {
    // REVIEW: discuss pagination
    // GET /api/products?page=1
    // axios.get(`/api/products?page=${page}`)
    //
    // GET /api/products?page=1&orderByPrice=asc&category=housewares
    // browser address bar: store.com/products?page=3&orderByPrice=asc&category=housewares
    // react-router does not parse query strings for us
    const category = req.query.category
    const orderByPrice = req.query.orderByPrice
    // category and orderByPrice MIGHT BE undefined
    /
    const page = req.query.page || 1
    const findOptions = {
      limit: PER_PAGE,
      offset: (page - 1) * PER_PAGE,
    }

    if (req.orderByPrice) {
      findOptions.order = ['price', req.orderByPrice]
    }
    else {
      findOptions.order = ['updatedAt', 'desc']
    }

    if (req.category) {
      findOptions.include = /* join on category */
    }

    const products = await Product.findAll(findOptions)
    res.send(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.send(product)
  } catch (err) {
    next(err)
  }
})

// REVIEW: discuss POST req.body danger zone
// if we were creating an endpoint for updating user data
const pick = require('lodash.pick')
const userEditableProps = ['username', 'birthDate']
const adminEditableProps = [...userEditableProps, 'isAdmin']
router.post('/api/users/:id', async (req, res, next) => {
  const user = await User.findByPk(req.params.id)
  // if body contained: { isAdmin: true }
  // if body contained: { createdAt: /* timestamp representing 1000 years ago */ }

  // if body == { birthDate: "2001/04/22" }
  // user.update({ username: undefined, birthDate: "2001/04/22" })
  // it's common to allow for accepting less data than the full allowed set of keys[
  let props;

  if (req.user.isAdmin) { props = adminEditableProps };
  else { props = userEditableProps }

  await user.update(pick(req.body, props));
  res.send(200)
})

module.exports = router
