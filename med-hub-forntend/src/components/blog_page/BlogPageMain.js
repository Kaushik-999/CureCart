import React, { useState, useEffect } from "react";
import "./BlogPageMain.css";
import axios from "axios";
import LargeCard from "./blogPageComponents/blogPageLargeCard/LargeCard";
import SmallCard from "./blogPageComponents/blogPageSmallCard/SmallCard";

function BlogPageMain() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const reponse = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            headers: {
              "Content-Type": "application/json",
            },
            params: {
              apiKey: "f49a6bb826994c2ea00684d7421d4ae9",
              category: "health",
              country: "in",
            },
          }
        );
        if (reponse.data.status === "ok") {
          console.log(reponse.data);
          setBlogData(reponse.data.articles);
        } else {
          console.log("error occured: not ok");
        }

        // console.log(blogData); // This will still show the previous value, not the updated value
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogData();
  }, []);

  // useEffect(() => {
  //   console.log(blogData[0]); // This will show the updated value of blogData
  //   // console.log(blogData[0].urlToImage);
  //   // console.log(blogData[0].title);
  //   // console.log(blogData[0].content);
  //   // console.log(blogData[0].url);
  //   // console.log(blogData[0].publishedAt);
  //   // console.log(blogData[0].author);
  // }, [blogData]);

  // image - urlToImage
  // title - title
  // description - content
  // article link - url
  // date - publishedAt
  // author - author

  return (
    <div className="blog-page-main-div">
      <h1>Blog Hour</h1>
      <div className="blog-page-main-large-card">
        {blogData && blogData.length > 0 && (
          <LargeCard
            image={blogData[0].urlToImage}
            title={blogData[0].title}
            description={blogData[0].content}
            article={blogData[0].url}
            date={blogData[0].publishedAt}
            author={blogData[0].author}
          />
        )}
      </div>
      <div className="blog-page-main-small-card">
        {blogData &&
          blogData.length > 0 &&
          blogData
            .slice(1)
            .map((data, index) => (
              <SmallCard
                key={index}
                image={data.urlToImage}
                title={data.title}
                description={data.content}
                article={data.url}
                date={data.publishedAt}
                author={data.author}
              />
            ))}
      </div>
    </div>
  );
}

export default BlogPageMain;

// {
//   "source": {
//     "id": null,
//     "name": "Deccan Herald"
//   },
//   "author": "PTI",
//   "title": "TB vaccine may have protective effect against Alzheimer's: Study - Deccan    Herald",
//   "description": "Treatment with the Bacillus Calmette-Guerin (BCG) vaccine—which prevents tuberculosis—is associated with a reduced risk of Alzheimer's disease and related dementias, according to a study. The BCG vaccine has been found to offer multiple beneficial effects, an…",
//   "url": "https://www.deccanherald.com/science-and-environment/tb-vaccine-may-have-protective-effect-against-alzheimers-study-1221017.html",
//   "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/05/22/representative-image-credit-istock-photo-48-1203381-1679723652-1204532-1680048585-1221017-1684750658.jpg",
//   "publishedAt": "2023-05-22T10:17:38Z",
//   "content": "Treatment with the Bacillus Calmette-Guerin (BCG) vaccinewhich prevents tuberculosisis associated with a reduced risk of Alzheimer's disease and related dementias, according to a study.\r\nThe BCG vacc… [+1916 chars]"
// }
