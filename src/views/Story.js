import React, { Component } from 'react';
import { TextField } from 'material-ui';
import RaisedButton from '../components/MaterializeRaisedButton';
import '../styles/responsive-text.css';

export default class Story extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 flow-text">
            <p>
              Appellat export mandaremus incididunt qui aliqua ubi ea cillum
              vidisse ubi velit expetendis philosophari, possumus legam iudicem.
              Quae non arbitror, cupidatat quem ingeniis occaecat. Ad voluptate
              illustriora.Malis doctrina praesentibus, cillum voluptate se
              cohaerescant ab minim excepteur si cillum amet, qui anim dolore
              fore admodum, laborum se fore offendit, export ullamco admodum sed
              ut minim noster se cernantur ita senserit quae sunt ad quorum.
              Incididunt do excepteur iis quid ab ubi sint iudicem. Ex senserit
              se aliquip a culpa aliquip cohaerescant, qui sint multos hic
              proident est dolor possumus aut quamquam.
            </p>
            <p>
              Quamquam instituendarum si cupidatat si noster aliquip
              familiaritatem. Summis non cernantur. Labore cernantur sed
              voluptate.Non o cohaerescant aut officia coniunctione ex ingeniis.
              Ingeniis fore illum id export. Officia nam iudicem e minim non
              vidisse id quid. Ita illum commodo pariatur an o noster esse malis
              occaecat, aliqua deserunt ab irure quid aut o de concursionibus,
              cillum cernantur mentitum, e dolor despicationes eu a illum
              fabulas graviterque, esse cernantur te despicationes.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField floatingLabelText="Floating Label Text" fullWidth />
          </div>
          <div className="col s12 m6">
            <TextField floatingLabelText="Floating Label Text" fullWidth />
          </div>
          <div className="col s12">
            <TextField
              floatingLabelText="MultiLine Floating Label Text"
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className="col-s12">
            <RaisedButton label="Submit" primary />
          </div>
        </div>
      </div>
    );
  }
}
