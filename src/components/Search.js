import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
  state = { 
    userSearch: '',
    searchResults: []
   }

   handleChange(prop,val){
     this.setState({
       [prop] : val
     })
   }

   searchMarvelDB = async() => {
    let apikey = process.env.REACT_APP_apikey
    let hash = process.env.REACT_APP_HASH
    let searchTerm = this.state.userSearch
    let response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&ts=1&apikey=${apikey}&hash=${hash}`)
    this.setState({searchResults: response.data.data.results})
   }


  render() { 
    return (
      <>
      <h1>search</h1>
      <input type="text" onChange={(e) => this.handleChange('userSearch', e.target.value)}/>
      <button onClick={() => this.searchMarvelDB()} >search</button>
      </>
     );
  }
}
 
export default Search;