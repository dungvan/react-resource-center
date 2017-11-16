import React, { Compoment } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from 'material-ui';

export default class SideBarItem extends Compoment {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    e.preventDefault();
  }

  render() {
    return (
      <NavLink
        activeClassName='active'
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        <MenuItem
          onTouchTap={this.handleClose}
          primaryText={this.props.text}
        />
      </NavLink>
    );
  }
}
