import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Contact from './Contact'
import Thirdpage from './ThirdPage';

ReactDOM.render(
    <Router>
    <Route path={"/"} component={App}/>
    <Route path={"/contact"} component={Contact}/>
    <Route path={"/Thirdpage"} component={Thirdpage}/>
    </Router>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
