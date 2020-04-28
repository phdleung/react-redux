import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  /* Scope Solution 3 - Constructor */
  // constructor(props) {
  //   super();

  //   this.onSearchSubmit = this.onSearchSubmit.bind(this);
  // }

  // async onSearchSubmit(term) {
  //   const response = await axios
  //     .get('https://api.unsplash.com/search/photos', {
  //       headers: {
  //          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API}`
  //       },
  //       params: {
  //         query: term
  //       }
  //     });
  //   this.setState({ images: response.data.results });
  // }

  /* Scope Solution 2 - Arrow Function */
  onSearchSubmit = async term => {
    const response = await unsplash
      .get('/search/photos', {
        params: {
          query: term
        }
      });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* Scope Solution 1 - Arrow Function */}
        {/* <SearchBar onSubmit={(event) => {this.onSearchSubmit(event)}} />  */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>);
  }
}

export default App;