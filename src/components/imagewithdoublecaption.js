import React from 'react';
import Image from './image';
import Caption from './caption';


/*
    Check for double images height
    Consider maybe hide some layout with hidden-*-down for mobile
    and hidden-*-up for larger screens
    We can alternate between them
    

*/ 
class ImageWithDoubleCaption extends React.Component {
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
                padding:'0'
            }
        }
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-2 offset-md-1'>
                        <div className='row'>
                            <div style={inlineStyle.caption}  className='col-12  border-left-0 border-right-0 border-bottom-0'>
                                <Caption title={this.state.captionTitle} description={this.state.captionDescription}/> 
                            </div>
                            <div style={inlineStyle.caption}  className='col-12  border-left-0 border-right-0 border-bottom-0'>
                                <Caption title={this.state.captionTitle} description={this.state.captionDescription}/> 
                            </div>
                        </div>
                    </div>
                

                
                
                    <div className='col-12 col-md-4'>
                        <Image imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander} /> 
                    </div>
                    
                    <div className='col-12 col-md-4'>
                        <Image imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander} /> 
                    </div>

                </div>
            </div>
        );
    }
}

export default ImageWithDoubleCaption;