import React, {Component} from "react";
const request = require('axios');

let runningResults = []


class Running extends Component{

    state = {
        result: []
    }
    componentDidMount() {
        let config = {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:8080"
            }
        }
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
    render() {

        if(this.props.data){
            var runCompetition = this.props.data.runCompetition.map(function(runCompetition){
                return <div key={runCompetition.name}><p>{runCompetition.name}<span>&bull;</span>
                   {runCompetition.time}<span>&bull;</span>{runCompetition.date}<span>&bull;</span>
                    {runCompetition.distance}</p>
                </div>
            })
        }

        return(
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
            </table>
                <div className="row item">
                    <div className="twelve columns">
                    {runCompetition}
                    </div>
                </div>
                </div>
            </section>
    );
    }
}
export default Running;