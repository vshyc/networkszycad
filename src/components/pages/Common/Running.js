import React, {Component} from "react";
const request = require('axios');

let runningResults = []


class Running extends Component{

    state = {
        result: []
    }
    componentDidMount() {}
    render() {

        if(this.props.data){


        var renderTableData = this.props.data.runCompetition.map((runCompetition, index) => {
            const runNameLines = runCompetition.name.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>);
            const runTimeLines = runCompetition.time.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>);
            const runDateLines = runCompetition.date.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>);
            const runDistanceLines = runCompetition.distance.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>);

            return (
                <tr key={index}>
                    <td>{runNameLines}</td>
                    <td>{runTimeLines}</td>
                    <td>{runDateLines}</td>
                    <td>{runDistanceLines}</td>
                </tr>
            );
        });}

        return(
            <section className="running">
                <div className="container">
            <h1>Latest Running Results</h1>
            <table className="blueTable">
                <thead className="blueTable">
                <tr>
                    <th>Run Name</th>
                    <th>Run Date</th>
                    <th>Run Time</th>
                    <th>Run Distance</th>
                </tr>
                </thead>
                <tbody>
                {renderTableData}
                </tbody>
            </table>
                </div>
            </section>
    );
    }
}
export default Running;