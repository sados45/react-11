import React, { Component } from 'react';

export default class SearchBar extends Component {

    state = {
        term : '',
        // value1: ''
}


        // handleClick =() => {
        // console.log ('this element is clicked');

      

        handleInputChange = (e) => {
           this.setState ({value : e.target.value})
        }

    //     handleInputChange1 = (e) => {
    //       this.setState ({value : e.target.value})
    //    }
        handleSubmit =(e) => {
          e.preventDefault()
          this.props.handleFormSubmit(this.state.term)
          console.log(this.state.value)
          // console.log(this.state.value1)

        }


        render () {

        return (
        <div className='input-card'>
        <form onSubmit={this.handleSubmit}>

        <label> Enter a search term</label>
        <br/>
        <input 
        style = {{width: '50%', height:'30px'}}
        onChange = {this.handleInputChange}
        type ='text'
        value = {this.state.value}
        />

        {/* <input 
        style = {{width: '50%', height:'30px'}}
        onChange = {this.handleInputChange1}
        type ='text'
        value = {this.state.value}
        /> */}
        <input 
        type= 'submit' 
        value='Submit'
        style= {{marginLeft: '10px'}}
        />

        </form>
        </div>
    );
    }
    }
