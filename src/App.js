import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  } 

  // componentDidMount(){
  //   fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     .then(response => response.json())
  //     .then(responseData => {this.setState({gifs: responseData.data})})
  //     .catch(error => console.log(error))  
  // }

  componentDidMount() {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      // here axios does the conversion into Json for you
      .then(response => {
        this.setState({ gifs: response.data.data })
        //response.data because of the axios schema and then data again to get the info we want
      })
      .catch(error => {
        console.log('Error fetching and parsing data');
      });
  }

  render() { 
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
