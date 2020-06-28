import './NewsList.css';
import React from 'react';
import NewsCard from "./NewsCard";


const NewsList = (props) =>
  <div id="NewsList">
    {props.articles.map((item) =>
      <NewsCard
        urlToImage={item.urlToImage}
        title={item.title}
        description={item.description}
        url={item.url}
        sourceName={item.source.name}
      />
    )}
  </div>

export default NewsList;
