import React from 'react';

class Caption extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const inlineStyle={
            container:{
                textAlign:'end',
                margin:'10px 0',
                padding:'0'
            },
            h1:{
                textAlign:'end',
                color: 'white',
                fontSize:'0.75rem'
            },
            p:{
                textAlign:'right',
                fontSize:'0.5rem'
            }
        }
        return(
            <div className='container' style={inlineStyle.container}>
                <div className='row'>
                    <div className='col-12'>
                        <h4 style={inlineStyle.h1}>{this.props.title}</h4> 
                        <p style={inlineStyle.p} >{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Caption;