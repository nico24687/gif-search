import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
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

  performSearch = (query = 'cats') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    .then(response => {
      this.setState({ gifs: response.data.data, loading: false })
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
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading</p>
            : <GifList data={this.state.gifs} />

          }
        </div>
      </div>
    );
  }

}
