import React from 'react'
import {Link} from 'react-router-dom'

function getH(date) {
  return (date + 24) % 12 || 12
}

export default function SingleReview(props) {
  const review = props.review
  const stars = []

  for (let i = 0; i < 5 - props.review.rating; i++) {
    stars.push(
      <i
        className="fa fa-star-o float-right"
        style={{color: '#fcdb03'}}
        key={i + 5}
      ></i>
    )
  }

  for (let i = 0; i < props.review.rating; i++) {
    stars.push(
      <i
        className="fas fa-star float-right"
        style={{color: '#fcdb03'}}
        key={i}
      ></i>
    )
  }

  const dateUpdated = new Date(review.updatedAt)

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://image.ibb.co/jw55Ex/def_face.jpg"
                className="img img-rounded img-fluid"
              />
              <p className="text-secondary text-center">
                {dateUpdated.toDateString()}
                <br></br>
                {`${getH(
                  dateUpdated.getHours()
                )}:${dateUpdated.getMinutes()}:${dateUpdated.getSeconds()}`}
              </p>
            </div>
            <div className="col-md-10">
              <p>
                <strong>
                  <Link to={`/users/${review.user.id}`}>
                    {review.user.fullName}
                  </Link>
                </strong>
                {stars}
              </p>
              <div className="clearfix"></div>
              <p>{review.description}</p>
              <p>
                <a className="float-right btn btn-outline-primary ml-2">
                  <i className="fa fa-reply"></i> Reply
                </a>
                <a className="float-right btn text-white btn-danger">
                  <i className="fa fa-heart"></i> Like
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
