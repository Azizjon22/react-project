import React, { Component } from 'react'
import "./header.scss"

export default class Header extends Component {
  render() {
    return (
      <>
  
   

       <header className="header__header">
      <nav className="header__nav">
        <div className="header__nav__logo">
          <img src='../imgs/menu.svg' alt=' menu'/>
          <img src='../imgs/logo.svg' alt=''/>
        </div>

        <ul>
          <li><a href='#'>Xizmatlar</a></li>
          <li><a href='#'>Loyihalar</a></li>
          <li><a href='#'>Biz xaqimzada</a></li>
          <li><img src='../imgs/play.png' alt='play'/></li>
        </ul>




        <div className="header__nav__tel">
          <div><a href='tel:'>+99895 100 10 66</a></div>
          <div><img src='../imgs/search.svg' alt=''/></div>
        </div>

        <button>sovol berish</button>


      </nav>
      </header>

         
      </>
    )
  }
}
