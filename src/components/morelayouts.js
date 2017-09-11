import React from 'react';
import Image from './image';
import Blurb from './blurb';

class MoreLayouts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            imgSrc:'https://via.placeholder.com/1600x900',
            altText:'This is a testing picture',
            expander:'false',
            title: 'BLURB',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam hendrerit ullamcorper dui et congue. Vivamus dignissim nisi vel mollis porta.`
        }
    }
    render(){
        const inlineStyle={
            h1:{
                textAlign:'center',
                fontWeight: 'bold',
                color: 'white',
                margin: '40px 0'
            }
        }
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <h1 style={inlineStyle.h1}>MORE LAYOUTS</h1> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <Image imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander} /> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <Blurb title={this.state.title} description={this.state.description}/> 
                    </div>
                </div>
            </div>
        );
    }
}

export default MoreLayouts;