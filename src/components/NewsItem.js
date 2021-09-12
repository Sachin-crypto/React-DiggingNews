import React, { Component } from "react";
import replacement from "./replacement.png";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imgurl ? replacement : imgurl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span className="badge rounded-pill bg-success">
                {source["name"]}
              </span>
            </h5>
            <p className="card-text">
              {!description
                ? "Description is not provided... Click on See Full button to read full news :)"
                : description}
            </p>
            <p className="card-text">
              <small className="text-info">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn btn-dark"
            >
              See Full
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
