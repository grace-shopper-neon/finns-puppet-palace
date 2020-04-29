import React from 'react'
import {Link} from 'react-router-dom'

export default class Pagination extends React.Component {
  render() {
    let page = this.props.currPage
    return (
      <ul className="pagination">
        <li className={page === 1 ? 'page-item disabled' : 'page-item'}>
          <Link
            to={`/?page=${page - 1}`}
            onClick={() => this.props.paginate(page - 1)}
            className="page-link"
          >
            Previous
          </Link>
        </li>

        <li className="page-item">
          <Link
            to={`/?page=${page + 1}`}
            onClick={() => this.props.paginate(page + 1)}
            className="page-link"
          >
            Next
          </Link>
        </li>
      </ul>
    )
  }
}
