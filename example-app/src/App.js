        
          import React, {Component} from 'react';
          import "./App.css"
          import SearchBar from './components/SearchBar';

          export default class App extends Component{
       
            handleFormSubmit =(term) =>{

                console.log(term)
            }

    render () {
        return (

          <SearchBar
          
          handleFormSubmit={this.handleFormSubmit}
          
          />
        )
    }
  }

  // biz burada handleFormSubmit ile SearchBar icinde bulunan handleSubmit icine baglanti kurduk. handleFormSubmit bir fonksiyon biz bunu SearchBar icinde handleSubmit icine aktardik.  burada üstten alta bir baglanti yok. App.js araciligiyla yan es deger bir sayfaya bilgi aktarimi mevcut. child olayi yok. bu nedenle App.js bilgi aktariminda önemli rol oynadi. yani App.js icinde function tanimladik. sonra etkilerini gördük. 
            
  
  