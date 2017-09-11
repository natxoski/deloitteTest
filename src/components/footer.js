import React from 'react';
import Image from './image';
import Blurb from './blurb';

{
/*Footer used in the website. Footer imports image and blurb components to be reused several times.
We set state of the component to be able to test easily the components. Otherwise we could implement a fetch function on the 
componentWillMount method to gather the data on a DB. We could then use a list to hold all the pictures with the data instead of 
hardcoding them.

*/}

class Footer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            imgSrc:'https://via.placeholder.com/1600x900',
            altText:'This is a testing picture',
            expander:'false',
            title:'PROJECT NAME',
            description: 'Lorem ipsum dolor sit amet'
        }
    }
    render(){
        const inlineStyle = {
            container: {
                margin: '10px 0'
            },
            img:{
                padding: '0',
                width:'97%',
                textAlign:'center'
            },
            h4 : {
                fontSize:'0.75rem',
                textAlign:'center',
                margin: '10px 0 0 0',
                color:'white'
            },
            p: {
                fontSize: '0.75rem',
                textAlign:'center',
                margin:'0'
            },
            spacer:{
                color:'313131',
                width:'1%',
                margin: '20px 0'
            },
            hr:{

                backgroundColor: '#313131',
                width: '10%'
            },
            copyright:{
                color: '#313131',
                fontSize: '0.5rem',
                textAlign:'center'

            },
            align: {
                textAlign:'center'
            }

        }
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <hr style={inlineStyle.spacer} />
                    </div>
                </div>
                <div className='row'>
                    <div style={inlineStyle.align} className='col-12 col-md-10 offset-md-1'>
                        <Blurb title={`More Projects`} description={this.state.description} />
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <div className='container' style={inlineStyle.container}>
                            <div className='row'>
                                <div className='col-12 col-md-3'>
                                    <Image style={inlineStyle.img} imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander}/>
                                    <h4 style={inlineStyle.h4}>{this.state.title}</h4>
                                    <p style={inlineStyle.p}>{this.state.description}</p>
                                </div>

                                <div className='col-12 col-md-3' style={inlineStyle.middle} >
                                    <Image style={inlineStyle.img} imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander}/>
                                    <h4 style={inlineStyle.h4}>{this.state.title}</h4>
                                    <p style={inlineStyle.p}>{this.state.description}</p>
                                </div>

                                <div className='col-12 col-md-3' style={inlineStyle.middle} >
                                    <Image style={inlineStyle.img} imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander}/>
                                    <h4 style={inlineStyle.h4}>{this.state.title}</h4>
                                    <p style={inlineStyle.p}>{this.state.description}</p>
                                </div>

                                <div className='col-12 col-md-3' style={inlineStyle.right}>
                                    <Image style={inlineStyle.img} imgSrc={this.state.imgSrc} altText={this.state.altText} expander={this.state.expander}/>
                                    <h4 style={inlineStyle.h4}>{this.state.title}</h4>
                                    <p style={inlineStyle.p}>{this.state.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <hr style={inlineStyle.hr} />
                        <p style={inlineStyle.copyright}> (C) Deloite Digital 2013 </p>
                    </div>
                </div>
                

            </div>
        );
    }
}

export default Footer;