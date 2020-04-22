const SET_PRODUCTS = 'SET_PRODUCTS'

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/256px-Creative-Tail-Animal-dog.svg.png'

export const fetchProducts = () => {
  return dispatch => {
    try {
      // const { data } = await Axios.get("/api/products");
      const data = [
        {
          id: 1,
          name: 'Dragon',
          description: 'get three dragons for the price of one!',
          imageUrl: imageUrl,
          price: 1000
        },
        {
          id: 1,
          name: 'Cat',
          description: 'get three cats for the price of one!',
          imageUrl: imageUrl,
          price: 10000
        },
        {
          id: 1,
          name: 'Dog',
          description: 'get three dogs for the price of one!',
          imageUrl: imageUrl,
          price: 40000
        }
      ]

      dispatch(setProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = []

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
