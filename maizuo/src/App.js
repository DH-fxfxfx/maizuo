import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable';
// import AuthRoute from './utils/Auth';

const Home = Loadable({
  loader: () => import('./views/Home/index'),
  loading: () => <div>加载中。。。。</div>
})
const City = Loadable({
  loader: () => import('./views/city/index'),
  loading: () => <div>加载中。。。。</div>
})
const Login = Loadable({
  loader: () => import('./views/login/index'),
  loading: () => <div>加载中。。。。</div>
})
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home}></Route>
          <Route path='/city' component={City}></Route>
          <Route path='/login' component={Login}></Route>
          {/* <Redirect to='/'></Redirect> */}
        </Switch>
      </Router>
    )
  }
}
