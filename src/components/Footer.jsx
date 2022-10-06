import React from 'react';

export default class Footer extends React.Component{
  render(){
    return ( 
      <footer>
        <div className='footer'>
          <a href='https://www.linkedin.com/in/iorran/' target='_blank' rel="noreferrer"
            style={ { textDecoration: 'none' } }><i className="fab fa-linkedin" /></a>
        </div>
        <p className="end">Iorran Ditscheiner - &copy; 2022</p>
      </footer>
    )
  }
}