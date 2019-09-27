import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = stream => {
    if (stream.userId === this.props.currentUserId)
      return (
        <div>
          <Button color="primary" tag={Link} to={`streams/edit/${stream.id}`}>
            Edit
          </Button>
          <Button color="danger" tag={Link} to={`streams/delete/${stream.id}`}>
            Delete
          </Button>
        </div>
      );
  };

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="mt-4" key={stream.id}>
          <Link to={`/streams/${stream.id}`}>
            <h5>{stream.title}</h5>
          </Link>
          <div className="lead">{stream.description}</div>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="mt-4">
          <Button color="info" tag={Link} to="/streams/new">
            Create a stream
          </Button>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="mt-3">
        <h2>Streams</h2>
        {this.renderList()}
        {this.renderCreate()}
      </div>
    );
  }
}
//Object.values turns object of objects into aray of objects
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
