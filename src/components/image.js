import React from 'react';

class Image extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () =>{

    }

    render(){

        const inlineStyle={
            
            
        }

        return(
            
            <div className='container' style={inlineStyle}>
                <div className='row'>
                    <div className='col-xs-12'>
                        <img className='img-fluid' src={this.props.imgSrc} alt={this.props.altText} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Image;