import React from "react";
import "./LargeCard.css";

function LargeCard(props) {
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
  const image = props.image;
  const title = props.title;
  const description = props.description || '';
  const article = props.article;
  const date = props.date;
  const author = props.author;

  // adjusting description length
  const maxDescriptionLength = 200;
  let truncatedDescription = description;

  if (description.length > maxDescriptionLength) {
    truncatedDescription = description.slice(0, maxDescriptionLength) + "…";
  }

  return (
    <div className="blog-page-large-card">
      <img src={image} alt="" />
      <p className="blog-page-large-card-title">{title}</p>
      <p className="blog-page-large-card-description">
        {truncatedDescription}
        {description.length > maxDescriptionLength && (
          <span className="blog-page-large-card-read-more-link">
            <a
              href={article}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </span>
        )}
      </p>
      <div className="blog-page-large-card-author-date">
        <p className="blog-page-large-card-date">
          Date: {formatDate({ date })}
        </p>
        <p className="blog-page-large-card-author">Author: {author}</p>
      </div>
    </div>
  );
}

export default LargeCard;

