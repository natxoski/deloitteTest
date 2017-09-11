import React from 'react';

{/*
Navbar from Bootstrap 4. Hold a navbar brand link and a the project name. If the screen is too small we will see
a toggle button. Other option to consider would be to center projectName. 

*/}


class NavBar extends React.Component {
    constructor(props){
      super(props);
    }

    
  
  render(){
      const inlineStyle = {
        anchor:{
            color:'white'
        }
      };
      return (
          <div className='container'>
              <div className='row'>
                  <div className='col-12 col-md-10 offset-md-1'> 
                    <nav className="navbar navbar-toggleable-md navbar-inverse">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">{this.props.brandName}</a>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">

                            <ul className='navbar-nav w-100 mr-auto justify-content-end'>
                                <li className='nav-item  '><a className="nav-link text-right" href="#" style={inlineStyle.anchor}>{this.props.projectName}</a></li>
                            </ul>

                        </div>
                    </nav>
                   </div>
                </div>
            </div>
      );
  }

}
export default NavBar;