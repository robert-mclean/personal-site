import React, { Component } from "react";
import axios from "axios";

const url = "/api/posts";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      title: "",
      content: "",
    };
    this.handleGetClick = this.handleGetClick.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
    this.formChangeHandler = this.formChangeHandler.bind(this);
  }
  handleGetClick() {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handlePostClick() {
    const { imageUrl, title, content } = this.state;
    console.log("POSTing: " + imageUrl + " " + title + " " + content);
    axios
      .post(url, {
        imageUrl: imageUrl,
        title: title,
        content: content,
      })
      .then((res) => {
        console.log("Posted");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  formChangeHandler(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGetClick}>Get</button>
        <input
          name="imageUrl"
          value={this.state.imageUrl}
          onChange={this.formChangeHandler}
        />
        <input
          name="title"
          value={this.state.title}
          onChange={this.formChangeHandler}
        />
        <input
          name="content"
          value={this.state.content}
          onChange={this.formChangeHandler}
        />
        <button onClick={this.handlePostClick}>Post</button>
      </div>
    );
  }
}

export default Test;
