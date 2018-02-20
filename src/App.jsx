import React, { Component } from 'react';
import search from './utils/search';
import Search from './Components/Search';
import UserBadge from './Components/UserBadge';
import RepoList from './Components/RepoList';
import Err from './Components/Err';

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
      error: false,
      errorMessage: '',
    };
    this.adjustSearchTerm = this.adjustSearchTerm.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }
  getUserInfo(e) {
    e.preventDefault();
    search(this.state.searchTerm)
      .then(searchResults => this.setState({ userObj: searchResults.userObj, userRepos: searchResults.userRepos }))
      .catch(err => this.setState({ error: true, errorMessage: err.message }));
  }
  adjustSearchTerm(searchTerm) {
    this.setState({
      searchTerm,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>InRhythm Github Coding Challenge</h1>
          <p>Let&apos;s get started! Search for a Github user below.</p>
        </div>
        {this.state.error ?
          <Err
            errorMessage={this.state.errorMessage}
            searchTerm={this.state.searchTerm}
            adjustSearchTerm={this.adjustSearchTerm}
            getUserInfo={this.getUserInfo}
          />
         :
          <div className="results">
            <UserBadge userObj={this.state.userObj} />
            <Search
              searchTerm={this.state.searchTerm}
              adjustSearchTerm={this.adjustSearchTerm}
              getUserInfo={this.getUserInfo}
            />
            {this.state.userRepos.length > 0 ? <RepoList userRepos={this.state.userRepos} /> : null}
          </div>
        }
      </div>
    );
  }
}

export default App;
