import React, { Component } from 'react'

export default class MainProps extends Component {
  render() {
    
    return (
      <>

        <div className="card">
          <img src={this.props.rasm} alt='rasm'/>

          <div className="card-body">
            <h3>{this.props.title}</h3>
            <p>{this.props.paragraph}</p>
          </div>

          <div className="card-footer d-flex justify-content-between">
            <span>23 fevral 2021 yil</span>
            <a href="#" className="d-flex align-items-centor"> <span>batafsil</span> <img src='../imgs/arrow.svg' alt=''/></a>
          </div>
        </div>

      </>
    )
  }
}
