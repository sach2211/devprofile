import React, { Component } from 'react';
import './App.css';

import WomenAvatar from './assets/women-avatar.png';

import TopCover from './components/TopCover';
import ProfilePic from './components/ProfilePic';
import DevName from './components/DevName';
import ProfileAndCompany from './components/ProfileAndCompany';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkEx from './components/WorkEx';
import OtherWork from './components/OtherWork';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    window.eventbus.listen('login-success', () => {
      this.setState({ loggedIn: true });
    })
  }

  render() {
    return (
      <div className="App">

        <div className='row1'>
          <TopCover src={this.props.store.cover} />
        </div>
        
        <div className='row2'>
          <ProfilePic src={this.props.store.avatar}/>
          <div className='devNameAndCompany'>
            <DevName name={this.props.store.name} />
            <ProfileAndCompany profile={this.props.store.profile} company={this.props.store.company} />
          </div>
        </div>

        <div className='row3'> 
          <Education education={this.props.store.education}/>
          <Skills skills={this.props.store.skills}/>
        </div>

        <div className='row4'>
          <WorkEx experience = {this.props.store.experience} />
          <OtherWork otherWork={this.props.store.otherWork} />
        </div>


        {/*  Login Buttons and other stuff */}
        {
          this.state.loggedIn
          ? (
            <div className='loginArea'>
              Hello {window.__devkos__.name} !<br/>
              Edit you profile <a href='/edit'><i> here </i></a>
            </div>
          ) : (
            <button className='loginArea loginButton' onClick={() => window.doGoogleLogin()}>Login</button>  
          )
        }
      </div>
    );
  }
}

export default App;