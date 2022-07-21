
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import "./app.css"
import axios from "axios";
import ImageList from '../ImageList';

class App extends  Component {
state={
  images:[]//boş images
}
    onSearchImage= async(search)=>//bind işleminden kurtulmak için arrow kullanıyoruz//search parametresi gönderilir
    {
      console.log('App: '+search);
     const results= await axios.get('https://api.unsplash.com/search/photos?',{//gelen parametreye göre axios ile unsplash api ye istek attık
        params:{
          query:search
        },
        headers:
        {
          Authorization:"Client-ID RfOqBnvuRPkuP0h1iOA9er2cRs0WYTsJUpwspkX4m8g"
        }
      })
      this.setState({
        images:results.data.results//gelen isteğe göre images güncellendi yukarda state olarak images i boş bir diziye atamıştık

      })
    }

    render()
    {
      // güncellenmiş image leri imagelist e props oluşturarak gönderdik
    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage}/>
        <ImageList images={this.state.images}/>
        
      </div>
    )
  }
};

export default App;