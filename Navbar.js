import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">{props.abouttext}</a>
        
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
                  abouttext:PropTypes.string    
                }           //telling what type is expected from the two things

Navbar.defaultProps={
  title:'Title here',
  abouttext:'About text'
}     //setting default value for the props 