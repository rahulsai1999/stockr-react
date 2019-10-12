import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Card from "./card";

const apiKey = "&apiKey=a0e21d414ee443c79dbd5e0e3cc16bf6";

const NewsComp = props => {
  const [newsData, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { company } = props;
    Axios.get(
      "https://newsapi.org/v2/everything?q=" +
        company +
        "&from=2019-10-10&to=2019-10-10&sortBy=popularity" +
        apiKey
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
        <div style={{ color: "white" }}>Loading...</div>
      ) : (
        <div className="row">
          {newsData.map(element => {
            return (
              <Card
                src={element.urlToImage}
                title={element.title}
                desc={element.description}
                author={element.source.name}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsComp;
