var React = require("react");
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Image = require("react-bootstrap").Image;
var Glyphicon = require("react-bootstrap").Glyphicon;
var SessionActions = require("../../actions/session_actions");
var PlayerActions = require("../../actions/player_actions");
var PlaylistActions = require("../../actions/playlist_actions");
var AddToQueue = require("../utility/add_to_queue");
var AddToPlaylist = require("../utility/add_to_playlist");

var TrackDetail = React.createClass({
  _trackDescription: function () {
    var description = this.props.track.description;

    if (description === "") {
      return "This track has no description!";
    } else {
      return description;
    }
  },

  addToQueue: function () {
    PlayerActions.addTrackToQueue(this.props.track);
  },

  addToPlaylist: function () {
    if (this.props.isLoggedIn) {
      PlaylistActions.showPlaylistModal();
    } else {
      SessionActions.showLogin();
    }
  },

  render: function () {
    var user = this.props.track.user;

    if (!user) { return <Row />; }

    return (
      <Row className="track-page-detail">
        <Col xs={ 2 } sm={ 2 } md={ 2 }>
          <Image src={ user.avatar_square } thumbnail />
        </Col>

        <Col xs={ 6 } sm={ 6 } md={ 6 } className="track-description">
          <h5 className="username">
            <a className="username" onClick={ this.props.goToUser }>
              { user.username }
            </a>
          </h5>

          <p className="track-description">
            { this._trackDescription() }
          </p>
        </Col>

        <Col xs={ 4 } sm={ 4 } md={ 4 }>
          <section className="track-buttons">
            <AddToQueue addToQueue={ this.addToQueue } />
            <AddToPlaylist addToPlaylist={ this.addToPlaylist } />
          </section>
        </Col>
      </Row>
    );
  }
});

module.exports = TrackDetail;