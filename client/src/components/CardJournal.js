import React, { Component } from 'react';

class CardJournal extends Component {
    state = {}
    constructor(props){
        super(props);
    }
    render() {
        return (

            <div className="container-journal">
                <div className="card-journal">
                    <div className="card-journal-img">
                        <img src={this.props.data.imageUrl}
                            alt="" />
                    </div>
                    <div className="card-journal-body">
                        <h2>{this.props.data.title}</h2>

                        <br />

                        <p>{this.props.data.abstract}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardJournal;