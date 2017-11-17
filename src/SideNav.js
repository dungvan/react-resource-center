import React, { Component } from 'react';
import { AppBar, Drawer } from 'material-ui';
import SideBarItem from './SideBarItem';
import { List, makeSelectable } from 'material-ui/List';

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
  {
    isExact: false,
    linkTo: '/service-request-form',
    text: 'Service Request Form'
  },
  { isExact: false, linkTo: '/tutorial', text: 'Tutorial' }
];

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    constructor(props) {
      super(props);
      this.handleRequestChange = this.handleRequestChange.bind(this);
    }
    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue
      });
    }

    handleRequestChange(e, index) {
      e.preventDefault();
      this.setState({
        selectedIndex: index
      });
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  handleClose(e) {
    e.preventDefault();
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Resource Center"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <SelectableList defaultValue={3}>
            {links.map((link, i) => {
              return (
                <SideBarItem
                  isExact={link.isExact}
                  linkTo={link.linkTo}
                  primaryText={link.text}
                  handleClose={this.handleClose}
                  key={i}
                />
              );
            })}
          </SelectableList>
        </Drawer>
      </div>
    );
  }
}
