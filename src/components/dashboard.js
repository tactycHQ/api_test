import React, {Component} from 'react';
import Outputs from "./outputs";

class Dashboard extends Component {

    // state = {
    //     getValue: false,
    //     result: null
    // }

    // async componentDidMount() {
    //     const api_url = "/refreshOutputsEager"
    //     const headers = {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         method: "POST",
    //         body: JSON.stringify({"dash_id": 8})
    //     }
    //     let response = await fetch(api_url, headers)
    //     let response_JSON = await response.json()
    //     console.log(response_JSON.message)
    //     this.setState({
    //         isLoading: false,
    //         result: response_JSON.message
    //     })
    // }


    render() {
        return (
            <div>
                <Outputs dash_id={8}/>
            </div>
        )
    }
}

export default Dashboard;