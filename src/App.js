import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin'
import fusTheme from './fusTheme'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'

injectTapEventPlugin()

class App extends Component {
  constructor () {
    super()
    this.state = { open: false }
  }

  handleToggle () {
    this.setState({ open: !this.state.open })
  }

  handleClose () {
    this.setState({ open: false })
  }

  render () {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >
              <NavLink activeClassName='active' exact to='/'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>
                  <p>Home</p>
                </MenuItem>
              </NavLink>
              <NavLink activeClassName='active' to='/logos'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>
                  <p>Logos</p>
                </MenuItem>
              </NavLink>
              <NavLink activeClassName='active' to='/posters'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>
                  <p>Posters</p>
                </MenuItem>
              </NavLink>
              <NavLink activeClassName='active' to='/' letterhead>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>
                  <p>Letterhead</p>
                </MenuItem>
              </NavLink>
              <NavLink activeClassName='active' to='/share-a-story'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>
                  <p>Share a Story</p>
                </MenuItem>
              </NavLink>
              <NavLink activeClassName='active' to='/service-request-form'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>
                  <p>Service Request Form</p>
                </MenuItem>
              </NavLink>
              <NavLink activeClassName='active' to='/tutorial'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>
                  <p>Tutorial</p>
                </MenuItem>
              </NavLink>
            </Drawer>

            <AppBar
              title='Title'
              onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
              iconClassNameRight='muidocs-icon-navigation-expand-more'
            />

            <Route exact path='/' />
            <Route path='/logos-posters' />
            <Route path='/logos' />
            <Route path='/posters' />
            <Route path='/letterhead' />
            <Route path='/share-a-story' />
            <Route path='/planning-guide' />
            <Route path='/services' />
            <Route path='/glossary' />
            <Route path='/service-request-form' />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
