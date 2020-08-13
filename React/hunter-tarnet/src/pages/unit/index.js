import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setDataActionCreator, ENTITY_TYPE_UNIT } from '../../actions';
import DataTable from '../../components/data-table';

class Unit extends React.Component{

    render() {
        axios.get('http://178.128.248.160:81/api/unit', {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczMjQyMjEsImV4cCI6MTU5NzMyNTEyMSwiaWF0IjoxNTk3MzI0MjIxfQ.VVkxPM99eGT1grH7XHt4J8pHv7OO0Xlxo-Abaxbqn0U' }
        })
            .then(response => this.props.dispatch(setDataActionCreator(ENTITY_TYPE_UNIT,response.data.data)))
            .catch(err => console.log(err));
        //throw("My Exception"); //Testing for ErrorCatcher
        const result = this.props.units && this.props.units.length > 0 ?
            <DataTable data={this.props.units} /> :
            <div>No data</div>;
        return <div className="ui container">{result}</div>
    }

}

const mapStateToProps = state => { return { units: state?.units ?? [] } }

export default connect(mapStateToProps)(Unit)