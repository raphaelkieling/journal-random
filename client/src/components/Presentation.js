import React, { Component } from 'react';

class Presentation extends Component {
    state = {}
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="presentation">
                    Não se perca em milhões de notícias, leia <span className="contrast-main-color">apenas</span> o necessário .
            </div>
                <div>
                    <button className="btn btn-header right" onClick={()=>this.props.reversePresentation()}>Quero notícia!</button>
                </div>
            </div>
        )
    }
}

export default Presentation;