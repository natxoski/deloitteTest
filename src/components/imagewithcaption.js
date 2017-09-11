import React from 'react';
import Image from './image';
import Caption from './caption';

class ImageWithCaption extends React.Component {
    constructor(props){
        super(props);
        this.state={
            imgSrc:'https://via.placeholder.com/1600x900',
            altText:'This is a testing picture',
            expander:'true',
            captionTitle: 'IMAGE CAPTION',
            captionDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam hendrerit ullamcorper`
        }
    }
    render(){
        const inlineStyle={
            caption:{
                border: '1px solid white',
                padding: '0'
            }
        }
        return(
            <div className='container'>
                <div className='row'>
                    <div style={inlineStyle.caption} className='col-12 col-md-2 offset-md-1 border-left-0 border-right-0 border-bottom-0'>
                        <Caption title={this.state.captionTitle} description={this.state.captionDescription}/> 
                    </div>   
               
                    <div className='col-12 col-md-8'>
                        <Image imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander} /> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageWithCaption;