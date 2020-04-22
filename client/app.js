import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import AllProducts from './components/Products/AllProducts'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllProducts />
    </div>
  )
}

export default App
