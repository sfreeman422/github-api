import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Search from './Components/Search';
import UserBadge from './Components/UserBadge';
import RepoList from './Components/RepoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      userObj: {
        avatar_url: '/images/Octocat.jpg',
      },
      userRepos: [],
    };
    this.adjustSearchTerm = this.adjustSearchTerm.bind(this);
    this.search = this.search.bind(this);
  }
  adjustSearchTerm(searchTerm) {
    this.setState({
      searchTerm,
    });
  }
  search(e) {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.searchTerm}`)
      .then(response => response.json())
      .then((json) => {
        const responseObj = Object.assign(json, {});
        if (json.message === 'Not Found') {
          responseObj.avatar_url = '/images/Octocat.jpg';
        }
        this.setState({
          userObj: responseObj,
        });
      });
    fetch(`https://api.github.com/users/${this.state.searchTerm}/repos`)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          userRepos: json,
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <h1>InRhythm Github Coding Challenge</h1>
          <p>Let&apos;s get started! Search for a Github user below.</p>
        </div>
        {!this.state.loading ? <UserBadge userObj={this.state.userObj} /> : null}
        <Search
          searchTerm={this.state.searchTerm}
          adjustSearchTerm={this.adjustSearchTerm}
          search={this.search}
        />
        {this.state.userRepos.length > 0 ? <RepoList userRepos={this.state.userRepos} /> : null}
      </div>
    );
  }
}

export default App;
