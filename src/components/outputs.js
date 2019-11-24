import React, { Component } from "react";

class Outputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "loading..."
    };
  }

  getOutputs = async () => {
    console.log("Getting API");
    const api_url = "/refreshOutputsEager";
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ dash_id: this.props.dash_id })
    };

    try {
      let response = await fetch(api_url, headers);
      let response_JSON = await response.json();
      this.setState({
        result: JSON.stringify(response_JSON.message),
        isLoading: false
      });
    } catch (error) {
      this.setState({
        result: "Server not responsive",
        isLoading: false
      });
    }
  };

  async componentDidMount() {
    this.getOutputs();
  }

  handleClick = () => {
    console.log("Clicked");
    this.setState({
      result: "loading..."
    });
    this.getOutputs();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Refresh</button>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default Outputs;
