import './Cats.css';
import React, {useState, useEffect, useCallback, useContext} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import LanguageContext from '../../LanguageContext';

import "react-datepicker/dist/react-datepicker.css";
import NewsList from "./HomePage/NewsList/NewsList";

const sortByOptions = [
  {value: 'publishedAt', name: 'Publish date'},
  {value: 'relevancy', name: 'Relevancy'},
  {value: 'popularity', name: 'Popularity'},
]

const Cats = () => {
  const [startDate, setStartDate] = useState(moment().subtract(1, 'months').toDate());
  const [endDate, setEndDate] = useState(moment().toDate());
  const [sortBy, setSortBy] = useState(sortByOptions[0].value);
  const [results, setResults] = useState(null);
  const lang = useContext(LanguageContext);

  const fetchArticles = useCallback(() => {
    if (startDate > endDate) return alert('start date is greater than end date');

    fetch(`http://localhost:4000/Cats?language=${lang}&from=${startDate.toISOString()}&to=${endDate.toISOString()}&sortBy=${sortBy}`)
      .then((response) => response.json())
      .then((res) => {
      setResults(res);
    });
  }, [startDate, endDate, lang, sortBy]);

useEffect(() => {fetchArticles(); }, [fetchArticles]);
useEffect(() => {fetchArticles(); }, [startDate, endDate]);



return (
  <div className="Cats">
    <div>
      <label>Start date:</label>
      <DatePicker selected={startDate} onChange={setStartDate} dateFormat="dd-MM-yyyy" />
  </div>
  <div>
    <label>End date:</label>
    <DatePicker selected={endDate} onChange={setEndDate} dateFormat="dd-MM-yyyy" />
  </div>
  <div>
  <label>Sort by:</label>
  <select>
    {sortByOptions.map(({value, name}) => (
      <option>{name}</option>
    ))}
  </select>
  </div>
  {results ? (<NewsList key={`${startDate}&{endDate}`}articles={results.articles.sort((a,b) => a.publishedAt > b.publishedAt)} />) : null}
  </div>
);
};

export default Cats;
