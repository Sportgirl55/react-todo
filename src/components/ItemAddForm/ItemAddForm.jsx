import React, { Component } from "react";
import './ItemAddForm.scss'

export default class ItemAddForm extends Component {
  state = {
    label: ''
  };



  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    // if (this.state.label === "") {
    //   return;
    // }
    this.props.onAdd(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {
    const { onAdd } = this.props;
    return (
      <form className="item-add-form"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary"
          onClick={() => onAdd}>
          Add Item
        </button>
      </form>
    )
  }
}