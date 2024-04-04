import React, { Component } from 'react'
import Header from "../conponents/header/Header"
import Main from "../conponents/main/Main"
import Footer from "../conponents/footer/Footer"
import "./home.scss"


export default class Home extends Component {
  render() {
    return (
      <>

        <Header/>
        <Main/>
        <Footer/>      
      
      </>
    )
  }
}
