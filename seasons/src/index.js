import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

/** 
 * Lifecycle: (frequenty used)
 * constructor >>> 
 * render >>> (content visible on screen) >>> 
 * componentDidMount >>> (sit and wait for updates) >>> 
 * componentDidUpdate >>> render - (sit and wait until this component is not longer shown) >>> 
 * componentWillUnmount
 */

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;

  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat}></SeasonDisplay>;
  } else {
    return <Spinner message='Please accept location request...' />;
  }

  return <div className='border red'>{content}</div>;

};

ReactDOM.render(<App />, document.querySelector('#root'));

/* class App extends React.Component {
  // constructor(props) {
  //   super(props);

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

  render() {
    return (
      <div className='border red'>
        {this.renderContent()}
      </div>
    );
  }
}*/
