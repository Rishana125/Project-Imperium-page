import React from 'react';
import './Navbar'
import NavBar from './Navbar';
import Overview from './Overview';
import Info from './Info';
import Developing from './Developing';
import Links from './Links';
import Comments from './Comments';

import firebase from './Config';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            comment: '',
            date: '',
            name: '',
            items: []
        };
        this.comments = [];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            name: this.state.name,
            comment: this.state.comment,
            date: new Date().toDateString()
        };
        itemsRef.push(item);
        this.setState({
            name: '',
            comment: '',
            date: ''
        });
    }

    componentDidMount() {
        this.comments = firebase.database().ref('items');
        this.comments.on('value', snapshot => {
            let items = snapshot.val();
            let newState = [];

            Object.keys(items).forEach(item => {
                newState.push({
                    date: items[item].date,
                    name: items[item].name,
                    comment: items[item].comment
                });
            });

            newState.reverse();
            this.setState({
                items: newState
            });
        });
    }

    render() {
    return(
        <div className="blockquote">
          <NavBar/>
          <Overview/>
          <Info/>
          <Developing/>
          <Links/>
          <Comments data={this}/>
        </div>
    );
  }
}