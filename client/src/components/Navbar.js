import React, { Component } from 'react';
import './Main.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  setSelectedFromLocalStorage(){
    const id =  localStorage.getItem('selectedNotice') ? localStorage.getItem('selectedNotice') : 0;
    this.select(id);
  }

  componentDidMount(){
    this.setSelectedFromLocalStorage();
    console.log(this.state.selected);
  }
  
  state = { selected: 0}

  select(id) {
    this.setState({ selected: id });
    localStorage.setItem('selectedNotice',id);
  }

  render() {
    return (
      <nav>
        <div className="logo">
          <img src="https://i.imgur.com/VbN6dyZ.png" alt="" />
        </div>
        <ul>
          <li className={this.state.selected == 0 ? 'active' : ''} onClick={() => { this.props.changeNotice('politica'); this.select(0) }}>Política</li>
          <li className={this.state.selected == 1 ? 'active' : ''} onClick={() => { this.props.changeNotice('economia'); this.select(1) }}>Economia</li>
          <li className={this.state.selected == 2 ? 'active' : ''} onClick={() => { this.props.changeNotice('esporte'); this.select(2) }}>Esporte</li>
          <li className={this.state.selected == 3 ? 'active' : ''} onClick={() => { this.props.changeNotice('mundo'); this.select(3) }}>Mundo</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;