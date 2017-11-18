import React, { Component } from 'react';
import GenericCard from '../components/GenericCard';
import { CardTitle } from 'material-ui/Card';
import { FlatButton } from 'material-ui';

export default class Logos extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <GenericCard
              headerTitle="Header title"
              headerAvatar="https://unsplash.it/100/200/?random=10"
              mediaImgSrc="https://unsplash.it/600/600/?random=11"
              overlay={
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
              }
              actions={
                <div>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </div>
              }
            >
              Te ingeniis exercitation te incididunt minim irure est sint, ubi
              eiusmod adipisicing, quo offendit ea fabulas. E incididunt ab
              mandaremus nam expetendis sed multos, export pariatur ne
              cohaerescant, nostrud fore noster qui malis in tempor firmissimum
              possumus magna expetendis se et se imitarentur, eu veniam pariatur
              cernantur se noster si excepteur ea quis.
            </GenericCard>
          </div>
        </div>
      </div>
    );
  }
}
