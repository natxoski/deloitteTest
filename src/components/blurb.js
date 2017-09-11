import React from 'react';

{/*
Component that holds a text and description. This component is reused several times in the website.
*/}

class Blurb extends React.Component{
    render(){
        const inlineStyle={
            container:{
                textAlign:'center',
                color: '##9e9e9e'
            },
            spacer:{
                width:'0'
            },
            h1:{
                color:'white'
            },
            p:{
                color:'#9e9e9e'
            }

        };
        return(
            <div className='container' style={inlineStyle.container}>
                <div className='row'>
                    <div className='col-12'>
                        <hr style={inlineStyle.spacer}/>
                    </div> {/*  This section helps to make a separation with the content*/}
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <section>
                            <h1 style={inlineStyle.h1}>{this.props.title}</h1>
                            <p style={inlineStyle.p}>{this.props.description}</p>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blurb;