import { HashRouter as Router, NavLink, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Loadable from 'react-loadable';
import '../../styles/base.less'
import { HomeWrapone, HomeWrapthree, HomeWraptwo } from './style'
const Cinema = Loadable({
  loader: () => import('../cinema/index'),
  loading: () => <div>加载中。。。。</div>
})
const Movie = Loadable({
  loader: () => import('../movie/index'),
  loading: () => <div>加载中。。。。</div>
})
const My = Loadable({
  loader: () => import('../my/index'),
  loading: () => <div>加载中。。。。</div>
})

export default class R extends Component {
  render() {
    return (
      <HomeWrapone>
        <HomeWraptwo >
          <Route path='/cinema' component={Cinema}></Route>
          <Route path='/movie' component={Movie}></Route>
          <Route path='/my' component={My}></Route>
        </HomeWraptwo>
        <HomeWrapthree>
          <NavLink to='/cinema'><span>影院</span></NavLink>
          <NavLink to='/movie'><span>电影</span></NavLink>
          <NavLink to='/cinema'><span>特惠</span></NavLink>
          <NavLink to='/my'><span>我的</span></NavLink>
        </HomeWrapthree>
      </HomeWrapone>
    )
  }
}

