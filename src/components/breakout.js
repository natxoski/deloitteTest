import React from 'react';
import Image from './image';
import Blurb from './blurb';

class Breakout extends React.Component {
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
            container:{
                backgroundColor:'white',
                padding:'0',
                margin:'20px 0'
            },
            spacer:{
                color:'white',
                width:'0'
            },
            h3:{
                textAlign:'start',
                fontWeight: 'bold',
                color: 'black',
                fontSize: '1rem',
                margin: '20px 0'
            },
            hr:{
                width:'20%',
                textAlign:'start',
                margin:'0'
            },
            p:{
                fontSize:'0.75rem'
            },
            right:{
                backgroundColor:'#e6e6e6'
            }
        }
        return(
            <div className='container' style={inlineStyle.container}>
                <div className='row'>
                    <div className='col-12'>
                    <hr style={inlineStyle.spacer} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 offset-md-1'>
                        <h4 style={inlineStyle.h3}>BREAKOUT AREA</h4>
                        <hr style={inlineStyle.hr}/>
                        <p style={inlineStyle.p}>{this.state.description}</p>
                        <hr style={inlineStyle.spacer}/>
                    </div>
                    <div className='col-12 col-md-6' style={inlineStyle.right}>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Breakout;