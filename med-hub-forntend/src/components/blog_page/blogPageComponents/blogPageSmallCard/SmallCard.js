import React from "react";
import "./SmallCard.css";
import blogImage from "../blogPageLargeCard/medicine.jpg"
function SmallCard(props) {

  // Date Formatting
  const formatDate = (dateString) => {
    let date;
    if (isNaN(Date.parse(dateString))) {
      date = new Date();
    } else {
      date = new Date(dateString);
    }

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  };

  // importing props
  const image = props.image === null ? blogImage : props.image;
  const title = props.title;
  const description = props.description;
  const article = props.article;
  const date = props.date;
  const author = props.author === null ? "Unknown" : props.author;

  // adjusting description length
  const maxDescriptionLength = 80;
  let truncatedDescription = description;

  if (description && description.length > maxDescriptionLength) {
    truncatedDescription = description.slice(0, maxDescriptionLength) + "…";
  }

  return (
    <div className="blog-page-small-card">
      <div className="blog-page-small-card-img">
        <img src={image} alt="" />
      </div>
      <p className="blog-page-small-card-title">
        {title}
      </p>
      <p className="blog-page-small-card-description">
        {truncatedDescription}
        {description && description.length > maxDescriptionLength && (
          <span className="blog-page-small-card-read-more-link">
            <a
              href={article}
              target="_blank"
              rel="noopener noreferrer"
            >
              ... Read More
            </a>
          </span>
        )}
      </p>
      <div className="blog-page-small-card-author-date">
        <p className="blog-page-small-card-date">
          Date: {formatDate(date)}
        </p>
        <p className="blog-page-small-card-author">Author: {author}</p>
      </div>
    </div>
  );
}

export default SmallCard;
