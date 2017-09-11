import React, { Component } from 'react';
import './App.css';

import NavBar  from './components/navbar';
import Feature  from './components/feature';
import ImageBlocks from './components/imageblocks';
import Breakout from './components/breakout';
import MoreLayouts from './components/morelayouts';
import ImageWithCaption from './components/imagewithcaption';


  /* To be fixed 
  import ImageWithDoubleCaption from './components/imagewithdoublecaption';
 */ 

 

/* 
The App is going to hold all the components from the website, we set some data on the state of the component and we set it up on the 
componentWillMount method.

Still to be implemented expanders and the modals related with them as I had no time.
However implementation should be modular to reuse the modal component with all the images that have the expander property set to true.

*/

import Footer from './components/footer';

class App extends Component {
  
  constructor(props){
    super(props);
    const state={
      clientSite: '',
      clientName: '',
      clientProjectName:'',
      clientBrandName:''
    };
  }


  componentWillMount(){
    this.setState({
      clientSite: 'https://example.com',
      clientName: 'CLIENT NAME',
      clientProjectName:'PROJECT NAME',
      clientBrandName:'D'
    });
  }
  render() {
    const inlineStyle={
      backgroundColor:'#1a1a1a',
      color:'#9e9e9e'
    }
    return (

      <div className='container' style={inlineStyle}>

        <NavBar brandName={this.state.clientBrandName} projectName={this.state.clientProjectName} />
 
        <Feature clientSite={this.state.clientSite} clientName={this.state.clientName} projectName={this.state.clientProjectName} target={'_blank'} />
        
        <ImageBlocks />

        <Breakout />
        
        <MoreLayouts />
        
        <ImageWithCaption />
        
        {
        /* Fix height at the Image With Double Caption.
        <ImageWithDoubleCaption />
        */
        }

        <Footer />
      </div>

    );
  }
}

export default App;
