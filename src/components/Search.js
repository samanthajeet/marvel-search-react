import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults'

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
    console.log(response.data.data.results)
   }


  render() { 

    const mappedSearchResults = this.state.searchResults.map( result => {
      return (
        <div key={result.id} >
          <SearchResults
            name = {result.name}
            thumbnail = {result.thumbnail.path}
            description = {result.description}
          
          />
        </div>
      )
    })

    return (
      <>
      <h1>search</h1>
      <input type="text" onChange={(e) => this.handleChange('userSearch', e.target.value)}/>
      <button onClick={() => this.searchMarvelDB()} >search</button>
      {mappedSearchResults}
      </>
     );
  }
}
 
export default Search;