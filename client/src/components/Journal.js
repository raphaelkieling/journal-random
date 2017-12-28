import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from './Navbar';
import CardJournal from './CardJournal';
import Loader from './Loader';
import Presentation from './Presentation';

class Journal extends Component {
    constructor() {
        super();
    }

    state = { data: null, loading:false, presentation: this.needPresentation() };

    componentDidMount(){
    }

    async loadNotice(category) {
        this.setState({ data: null ,loading:true});
        await Axios.get(`http://localhost:3022/noticias/${category}`)
            .then(function (res) {
                this.setState({ data: res.data,loading:false })
            }.bind(this));
    }

    async reversePresentation() {
        this.setState({ presentation: !this.state.presentation });
        await this.loadNotice('politica');
    }

    needPresentation(){
        return !localStorage.getItem('selectedNotice');
    }

    hasData() {
        return this.state.data;
    }

    render() {
        return (
            <div>
                <main>
                    <Navbar changeNotice={this.loadNotice.bind(this)} />
                    {this.needPresentation()
                        ? <Presentation reversePresentation={this.reversePresentation.bind(this)} />
                        : null
                    }
                </main>
                {this.hasData() && !this.needPresentation()
                    ? <CardJournal data={this.state.data} />
                    : null
                }
                {this.state.loading
                    ? <Loader />
                    : null
                }
            </div>
        )
    }
}

export default Journal;