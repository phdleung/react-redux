import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/** 
 * Lifecycle: (frequenty used)
 * constructor >>> 
 * render >>> (content visible on screen) >>> 
 * componentDidMount >>> (sit and wait for updates) >>> 
 * componentDidUpdate >>> render - (sit and wait until this component is not longer shown) >>> 
 * componentWillUnmount
 */

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // ONLY TIME that we can do direct assigment
  //   this.state = { lat: null, errorMessage: '' };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //setTimeout(() => { // Test loading
          this.setState({ lat: position.coords.latitude })
        //}, 2000);
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Please accept location request...' />;
  }

  // Always define render!!
  render() {
    return (
      <div className='border red'>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
