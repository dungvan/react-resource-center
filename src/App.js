import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin'
import fusTheme from './fusTheme'
import { Route } from 'react-router-dom'

injectTapEventPlugin()

class App extends Component {
  constructor () {
    super()
    this.state = { open: false }
  }

  handleToggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
        <div>
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={open => this.setState({ open })}
          >
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
          <AppBar
            title='Title'
            onLeftIconButtonTouchTap={this.handleToggle}
            iconClassNameRight='muidocs-icon-navigation-expand-more'
          />
          <Route exact id='/'>
            <p>Home View</p>
          </Route>
          <Route id='/logos-posters'>
            <p>Logos and Posters View</p>
          </Route>
          <Route id='/logos'>
            <p>Logos View</p>
          </Route>
          <Route id='/posters'>
            <p>Posters View</p>
          </Route>
          <Route id='/letterhead'>
            <p>Letterhead View</p>
          </Route>
          <Route id='/share-a-story'>
            <p>Share a Story View</p>
          </Route>
          <Route id='/planning-guide'>
            <p>Planning guide View</p>
          </Route>
          <Route id='/services'>
            <p>Services View</p>
          </Route>
          <Route id='/glossary'>
            <p>Glossary View</p>
          </Route>
          <Route id='/service-request-form'>
            <p>Service Request Form View</p>
          </Route>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
