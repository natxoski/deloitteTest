import React from 'react';

/*
Jumbotron is used to engage customer with some content and a call to action button.
*/


class Jumbotron extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        const inlineStyle = {
            container:{
                margin:'1rem 0'
            },
            jumbotron: {
                textAlign:'center',
                backgroundColor:'#1a1a1a'
                
            },
            h1: {
                fontWeight:'bold',
                
            },
            lead:{
                fontWeight:'bold',
                textAlign:'center',
                color:'#9e9e9e'
            },
            p:{
                textAlign:'center',
                color:'#9e9e9e'
            },
            em:{
                fontFamily: 'serif',
                fontWeight:'italic'
            },
            button: {
                border: '3px solid white',
                borderRadius: '0',
                padding:'0.5rem 1rem',
                backgroundColor: '#1a1a1a'
            },
            anchor: {
                textDecoration: 'none',
                color: 'white'
            }
        };
        
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>   
                        <div className='jumbotron' style={inlineStyle.jumbotron}>
                            <h1 className='display-6' style={inlineStyle.h1}>{this.props.projectName}</h1>
                            <small className='' style={inlineStyle.lead}> 
                                SERVICE OFFERING <em style={inlineStyle.em}> for </em> {this.props.clientName} 
                            </small>
                            <p style={inlineStyle.p}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia ex eu nibh auctor, ac ultricies felis pharetra. 
                                Nam lacinia metus non egestas dignissim. Proin mi nunc, aliquet quis augue et, pharetra faucibus dui. Proin euismod 
                                ipsum at odio hendrerit, at hendrerit purus condimentum.
                            </p>
                            <p><button style={inlineStyle.button}><a href={this.props.clientSite} style={inlineStyle.anchor} target={this.props.target}>VISIT SITE</a></button></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Jumbotron;