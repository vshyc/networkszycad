import React, {Component} from "react";
const request = require('axios');

let runningResults = []


class Running extends Component{

    state = {
        result: []
    }
    componentDidMount() {
        // let config = {
        //     headers: {
        //         "Access-Control-Allow-Origin": "http://localhost:8080"
        //     }
        // }
        request.get("http://localhost:8080/results")
            .then(value => {
                const result = value.data._embedded.results;
                this.setState({result})
                console.log(result)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() { return(
            <section>
                <div className="container">
            <h1>Running Results</h1>
            <table className="table-responsive">
                <thead className="table-bordered table-primary">
                <tr>
                    <th>Run Name</th>
                    <th>Run Date</th>
                    <th>Run Time</th>
                    <th>Run Distance</th>
                </tr>
                </thead>
                <tbody className="table-bordered table-dark">
                    { this.state.result.map((value, index) =>
                    <tr className="">
                        <th className="">{value.runName}</th>
                        <th>{value.runDate}</th>
                        <th>{value.runTime}</th>
                        <th>{value.runDistance}</th>
                    </tr>
                    )}
                </tbody>
            </table>
                    <div>
                        { this.state.result.forEach(value => value.runName)}
                    </div>
            </div>
            </section>
        );
    }
}
export default Running;