/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as SingleProduct} from './Products/SingleProduct'
export {default as AdminPage} from './Admin/AdminPage'
export {default as UserList} from './Admin/UserList'
export {default as ProductList} from './Admin/ProductList'
export {default as SingleUser} from './SingleUser'
export {Login, Signup} from './auth-form'
