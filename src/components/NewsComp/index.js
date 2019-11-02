import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Card from "./card";
import BeatLoader from "react-spinners/BeatLoader";

const NewsComp = props => {
  const [newsData, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const company = props.company ? "&q=" + props.company : "";
    console.log(company);
    Axios.get(
      "https://newsapi.org/v2/top-headlines?from=2019-10-27&category=business&country=us&sortBy=popularity&apiKey=a0e21d414ee443c79dbd5e0e3cc16bf6" +
        company
    ).then(response => {
      const { articles } = response.data;
      console.log(articles);
      setNews(articles);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <BeatLoader
          loading={loading}
          size={20}
          sizeUnit={"px"}
          color={"#BD10E0"}
        />
      ) : (
        <div className="row">
          {newsData.map(element => {
            return (
              <Card
                src={element.urlToImage}
                title={element.title}
                desc={element.description}
                author={element.source.name}
                link={element.url}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsComp;
