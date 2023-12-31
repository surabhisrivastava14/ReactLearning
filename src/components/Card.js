import React from 'react';


const Card = ({imageURL,title,description,actionName,actionEvent}) => {
  return (
    <div
    style={{
      maxWidth: "250px",
    }}
    className="card mt-2"
  >
    <img
      style={{
        width: "100px",
        margin:"auto",
      }}
      className="card-img-top"
    src={imageURL}
    ></img>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a className="btn btn-primary" onClick={actionEvent} >{actionName}</a>
    </div>
  </div>
  )
}

export default Card