import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    history.push(this.props.navigate);
  }

  render() {
    return ReactDOM.createPortal(
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Deleting a stream</ModalHeader>
          <ModalBody>{this.props.modalBody}</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.onClickHandler}>
              {this.props.mainButton}
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>,
      document.querySelector("#modal")
    );
  }
}
export default MyModal;
