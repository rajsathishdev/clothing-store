import React from 'react';
import { Switch, Link, Route,BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';

const HomePage2 = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/topics">Topics</Link>
      <h1>Home</h1>
    </div>
  );
};

const TopicList = (props) => {
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <Link to={`${props.match.url}/20`}>Topic 20 </Link>
      <Link to={`${props.match.url}/21`}>Topic 21 </Link>
      <Link to={`${props.match.url}/22`}>Topic 22 </Link>
      <h1>Topic List Page</h1>
    </div>
  )
};


const TopicDetail = (props) => {
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>Topic Details { props.match.params.topicId }</h1>
    </div>
  )
};

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      </Switch> 
      </Router>
       
    </div>
  );
}

export default App;
