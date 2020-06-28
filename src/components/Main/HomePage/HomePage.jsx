import './HomePage.css';
import React from 'react';
import NewsList from "./NewsList/NewsList";
import NewsFiltersBar from "./NewsFiltersBar/NewsFiltersBar";
import LanguageContext from '../../../LanguageContext';
import { Pagination } from 'semantic-ui-react';



class HomePage extends React.Component {

static conextType = LanguageContext;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      category: null,
      searchQuery: null,
      lang: null,
      phrase: 1,
      page: 1,
    }
  }

componentDidMount() {
  this.getArticles();
  this.setState({lang: this.context});
}
componentDidUpdate(prevProps, prevState, snapshot) {
  if (prevState.category !== this.state.category || prevState.lang !==this.state.lang) this.getArticles();
  if (prevState.lang !== this.context) this.setState({lang: this.context});
  if (prevState.phrase !== this.state.phrase) this.getArticles();
  if (prevState.page !== this.state.page) this.getArticles();
}


getQuery () {
  const {category, searchQuery} = this.state;

  let query;
  if (category) {
    query = searchQuery
    ? `?category=${category}&q=${searchQuery}`
    : `?category=${category}`;
} else{
  query = searchQuery ? `?q=${searchQuery}` : "";
}
  return query;
}


getArticles() {
  const {category, lang, phrase, page} = this.state;
  const query = category ? `&category=${category}` : "";
  const queryWithPhrase = phrase ? `${query}&q=${phrase}` : query;
  const queryWithPage = page ? `${queryWithPhrase}&page=${page}`
    : queryWithPhrase;

  fetch(`http://localhost:4000/articles?country=${lang}${queryWithPage}`)
    .then((response) => response.json())
    .then((results) => this.setState({results}));
}

setCategory = (category) => this.setState({ category });
setSearchPhrase = (e) => {
  const phrase = e.target.value;
  if (phrase.length >=3) this.setState({phrase});
  if (!phrase || phrase ==="") this.setState({phrase: null});
};
onPageChange = (e, {activePage}) => {
  this.setState({page: activePage});
};
  render() {
    const { results } = this.state;
    if (!results) return null;

    return (
      <>
      <div id="HomePage">
        <NewsFiltersBar
        onCategoryChange={this.setCategory}
        onSearchPhraseChange={this.setSearchPhrase}
        category={this.state.category}
        />

        <NewsList articles={results.articles} />
        </div>

       <div id="Pagination">
        {results && results.totalResults ? (
          <Pagination
          defaultActivePage={1}
          totalPages={Math.ceil(results.totalResults / 5)}
          onPageChange={this.onPageChange}
          />
        ) : null}
  </div>
  </>
);
}
}



export default HomePage;
