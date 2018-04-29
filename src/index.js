import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class AppStore {

  name= 'Sachin Chopra'

  company= 'Myntra' 

  profile= 'Senior Software Engineer'

  cover= 'https://s3.amazonaws.com/choprasachin.samplebucket1/wall.jpg'

  avatar= 'https://s3.amazonaws.com/choprasachin.samplebucket1/men-avatar2.png'

  education= `
  * B.Tech (Hons.) in Comp Sci. from Indian Institute of Information Technology.


  * Graduated with GPA -  9.1/10
  `

  skills= `
  * Fullstack JS Ninja - React , Redux, Node JS.


  * Familiar with SQL & NoSQL DBs - Mongo and Redis.


  * Experinced with new browser APIs & PWAs.


  * Love everything related to web 💖.
  `

  experience=  `
  * **Senior Software Engineer @  myntra.com**

  Building Myntra's new PWA.


  * **Software Engineer @  myntra.com**

  Worked on myntra.com website -  added many new features and optimized performance.

  `

  otherWork= `
  * Spoke at ReactFoo 2018 - "Profiling and Optimizing react apps".
  * [JS Expert according to Pluralsight 😇](https://s3.amazonaws.com/choprasachin.samplebucket1/PluralSight-JS.png).
  `
}


ReactDOM.render(<App store={new AppStore()}/>, document.getElementById('root'));
registerServiceWorker();
