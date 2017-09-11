import React from 'react';
import Image from './image';
import Blurb from './blurb';


{
    /*
    ImageBlock uses several images and blurb component.
    We set state of the component to be able to test easily the components. 
    
    */}

class ImageBlocks extends React.Component{
    constructor(props){
        super(props);
        this.state={

            imgSrc:'https://via.placeholder.com/1600x900',
            altText:'This is a testing picture',
            expander:'true',
            title:'BLURB',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia ex eu nibh auctor, ac ultricies felis pharetra.'

        }

    }
    render(){

        const inlineStyle={
            backgroundColor: '#1a1a1a',
            color: 'white'  ,
            rowSpace:{
                marginTop:'10px'
            }  
        }

        return(
            <div className='container' style={inlineStyle}>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <Image imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12  col-md-10 offset-md-1'>
                        <Blurb title={this.state.title} description={this.state.description}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <Image imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander} />
                    </div>
                </div>
                <div className='row' style={inlineStyle.rowSpace}>
                    <div className='col-12  col-md-5 offset-md-1'>
                        <Image imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander} />
                    </div>
                    <div className='col-12 col-md-5'>
                        <Image imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageBlocks;