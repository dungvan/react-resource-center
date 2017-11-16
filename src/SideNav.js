import React, { Component } from 'react';
import { AppBar, Drawer } from 'material-ui';
import SideBarItem from './SideBarItem';

/*
  Add your nav link here...
    isExact: if true it will be an exact path
    linkTo: the path you want to go
    text: title of the nav item
*/

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/logos', text: 'Logos' },
  { isExact: false, linkTo: '/posters', text: 'Posters' },
  { isExact: false, linkTo: '/letterhead', text: 'Letterhead' },
  { isExact: false, linkTo: '/share-a-story', text: 'Share a Story' },
  { isExact: false, linkTo: '/service-request-form', text: 'Service Request Form' },
  { isExact: false, linkTo: '/tutorial', text: 'Tutorial' }
];

export default class SideNav extends Component {
  constructor (props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle (e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  handleClose (e) {
    e.preventDefault();
    this.setState({ open: false });
  }

  render () {
    return (
      <div>
        <AppBar
          title='Title'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          {links.map((link, i) => {
            return (
              <SideBarItem
                isExact={link.isExact}
                linkTo={link.linkTo}
                primaryText={link.text}
                handleClose={this.handleClose}
                key={i}
              />
            )
          })}
        </Drawer>
      </div>
    )
  }
}
