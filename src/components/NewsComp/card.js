import React, { Component } from "react";

const Card = props => {
  const { src, title, desc, author, url } = props;
  return (
    <div className="card mb-6">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={src} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={url} class="stretched-link"></a>
            <p className="card-text">
              <small className="text-muted">{author}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
