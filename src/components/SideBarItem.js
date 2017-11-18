import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem } from 'material-ui/List';

export default class SideBarItem extends Component {
  render() {
    return (
      <NavLink
        activeClassName="active"
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        <ListItem
          primaryText={this.props.primaryText}
          onTouchTap={this.props.onClick}
          hoverColor="red"
        />
      </NavLink>
    );
  }
}
