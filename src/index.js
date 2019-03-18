import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  //constructor
  constructor(props) {
    super(props);

    //init state after super
    //this.state = {lat: null, errorMessage: ''};
  }

  //
  state = { lat: null, errorMessage: ''};

  // load data and service in didMount method
  componentDidMount() {
    // console.log('My component was rendered to the screen')

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );

  }

  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('My component was just updated - it rerendered!')
  // }

  // doing cleanup
  // componentWillUnmount() {
  //
  // }


  // react says we have to define render!!
  render() {

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <div>loading~</div>

  }
}


ReactDOM.render(<App />, document.querySelector('#root'));