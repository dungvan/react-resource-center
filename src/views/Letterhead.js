import React, { Component } from 'react';
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Letterhead extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <p>
              Ad dolor malis ipsum commodo, malis voluptate consequat ita qui et
              graviterque ea appellat irure mentitum laborum, et fore quo quis
              ad si ne enim quamquam nam tamen voluptatibus occaecat culpa
              probant, iis quamquam ut singulis. Aut aliqua cillum minim
              singulis, e expetendis quo officia. Quamquam voluptatibus ita
              deserunt.Quae fidelissimae constias irure nescius an cernantur
              labore arbitror in officia multos appellat quamquam in export
              ingeniis ut excepteur in ita incididunt illustriora quo iis tamen
              ne legam e e quid occaecat, ut quis exquisitaque. Eram constias te
              nescius. Labore ita id dolor fabulas, ita nisi aut elit, minim eu
              ut nisi laboris iis o export nescius eruditionem. Magna laboris ne
              litteris, quae doctrina an quid fore quo ab o comprehenderit, quem
              arbitror coniunctione, te sed nisi velit veniam, in enim a nisi et
              quo nulla illustriora aut excepteur te excepteur.
            </p>
            <p>
              Quibusdam fugiat quibusdam. Voluptate cillum excepteur. Anim
              familiaritatem nescius dolor expetendis, eu id sempiternum et ad
              de malis constias est quid probant sed quibusdam aut se eu
              sempiternum, est quae mandaremus de et quorum excepteur, quis
              cupidatat hic praetermissum. Est summis ab quem ad quamquam velit
              aliquip.Dolore constias mentitum. Velit despicationes expetendis
              sint possumus, nescius se velit nam quae ne ad sint excepteur ut
              quibusdam ea pariatur, se eram duis irure offendit ex officia
              dolor incurreret, incurreret eu aute probant et duis ut ingeniis
              ex ipsum. Cernantur tempor arbitror voluptate, in fore id velit,
              do an concursionibus non nulla quo consequat ex quorum. Deserunt
              aliqua enim et fore, mandaremus nulla quibusdam deserunt.
            </p>
          </div>
        </div>
        <div className="col s12 m6" style={{ paddingBottom: '0.75rem' }}>
          <Card>
            <CardMedia>
              <img src="https://unsplash.it/600/776/?random" alt="" />
            </CardMedia>
            <CardActions>
              <FlatButton label="Action1" />
            </CardActions>
            <CardTitle title="Card title" />
          </Card>
        </div>

        <div className="col s12 m6" style={{ paddingBottom: '0.75rem' }}>
          <Card>
            <CardMedia>
              <img src="https://unsplash.it/600/776/?random" alt="" />
            </CardMedia>
            <CardActions>
              <FlatButton label="Action1" />
            </CardActions>
            <CardTitle title="Card title" />
          </Card>
        </div>
      </div>
    );
  }
}
