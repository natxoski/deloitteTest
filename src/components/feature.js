import React from 'react';

import Carousel from './carousel';
import Jumbotron from './jumbotron';

class Feature extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        const inlineStyle={
            backgroundColor: '#1a1a1a',
            color: 'white'

        }
        return (
            <div className='container' style={inlineStyle}>
                <div className='row'>
                    <Carousel />
                </div>
                <div className='row'>
                    <div className='col-xs-12'>
                        <Jumbotron clientSite={this.props.clientSite} clientName={this.props.clientName} projectName={this.props.projectName} target={'_blank'} />
                    </div>
                </div>
            </div>
        );
    }

}


export default Feature;