import React from "react";
import MyModal from "../MyModal";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete this post with title: ${this.props.stream.title}?`;
    }
  }
  render() {
    return (
      <MyModal
        buttonLabel="Delete"
        modalBody={this.renderContent()}
        mainButton="Delete the post"
        navigate="/"
        onClickHandler={() =>
          this.props.deleteStream(this.props.match.params.id)
        }
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
