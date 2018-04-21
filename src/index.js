import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class AppStore {

  name= 'Sachin Chopra'

  company= 'Myntra' 

  profile= 'Senior Software Engineer'

  avatar= 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Creative-Tail-People-wonder-women.svg/200px-Creative-Tail-People-wonder-women.svg.png'

  education= 'Education'

  skills= 'Skills'

  experience= 'Work Experience'

  otherWork= 'Contributions'
}


ReactDOM.render(<App store={new AppStore()}/>, document.getElementById('root'));
registerServiceWorker();
