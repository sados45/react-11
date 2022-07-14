        
  //         import React, {Component} from 'react';
  //         import "./App.css"
  //         import SearchBar from './components/SearchBar';

  //         export default class App extends Component{
       
  //           handleFormSubmit =(term) =>{

  //               console.log(term)
  //           }

  //   render () {
  //       return (

  //         <SearchBar
          
  //         handleFormSubmit={this.handleFormSubmit}
          
  //         />
  //       )
  //   }
  // }

  // // biz burada handleFormSubmit ile SearchBar icinde bulunan handleSubmit icine baglanti kurduk. handleFormSubmit bir fonksiyon biz bunu SearchBar icinde handleSubmit icine aktardik.  burada üstten alta bir baglanti yok. App.js araciligiyla yan es deger bir sayfaya bilgi aktarimi mevcut. child olayi yok. bu nedenle App.js bilgi aktariminda önemli rol oynadi. yani App.js icinde function tanimladik. sonra etkilerini gördük. 
            



  //REACT 12 DERSI : KONU: UNSPLASH _______AXIOS 
  
  import React, { Component } from 'react'
  import SearchBar from './components/SearchBar';
import ImageList from '../src/components/ImageList'
 import axios from 'axios';

export default class App extends Component {

    state= {
        images:[]
    }
  
    handleFormSubmit = async (term) => {
     const response= await axios.get('https://api.unsplash.com/search/photos', {
        params :{query :term}, //unsplash api dan aliyourz.
        headers : {
        Authorization: 'Client-ID Fi5NVLurQwsyrmBNEs3gL_0qrnT_zV-srlik1MhpVjs'  //unsplash dan aliyoruz. 
        }
    }) //.then((resp)=>console.log(resp)).catch(err => console.log(err)) bu sekilde yapmayip async await özelligini de kullanbiliriz. 
    // console.log(response)
    this.setState({ images : response.data.results}) 
    }

  render() {
    return (
        <>
        <SearchBar
        handleFormSubmit = {this.handleFormSubmit}
        />
        <ImageList
        images= {this.state.images}
        />
        
        </>
    )
  }
} // npm install axios  bizim axiosu kurmamiz icin terminale yaziyoruz. 

//npmjs.com icinde axios ile ilgili bircok bilgi mevcut. 

