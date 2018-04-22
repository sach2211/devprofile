import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class AppStore {

  name= 'Wondor Woman'

  company= 'Amozon' 

  profile= 'Senior Software Engineer'

  cover= 'https://s3.amazonaws.com/choprasachin.samplebucket1/ww-poster.jpg'

  avatar= 'https://s3.amazonaws.com/choprasachin.samplebucket1/women-avatar.png'

  education= `
  * B.S. (Hons.) in Comp Sci. from Zeus Institute of Technology, Amazon.
  * Graduated with GPA -  5/4
  `

  skills= `
  * Fullstack JS Ninja - React , Node JS.
  * Comfortable with SQL & NoSQL DBs - Mongo and Redis.
  * Java geek & Go expert.
  * Love all stuff related to data - Kafka, Spark, Hadoop.
  `

  experience=  `
  * **Senior Software Engineer @  DC Universe**

  Working on DC's newest gadgets along with several other teamates to defeat Thanos.


  * **Junior Software Engineer @  Amozon National Army**

  Working with senior members and my aunts to defeat demons from hell.

  `

  otherWork= `
  * Regualr speaker at all the Tech Conferences.
  * 10k + readers on Medium Blog.
  * 1M Youtube subscribers.
  * Top Contributor on Stack Overflow.
  `
}


ReactDOM.render(<App store={new AppStore()}/>, document.getElementById('root'));
registerServiceWorker();
