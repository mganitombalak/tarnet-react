import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadDataActionCreator, deleteDataActionCreator, ENTITY_TYPE_UNIT, ACTION_LOAD_DATA, ACTION_DELETE_DATA } from '../../actions';
import DataTable from '../../components/data-table';
import BasicDataTable from '../../components/datatable'

class Unit extends React.Component{
    
    onLoadData = () => {
        this.props.loadDataActionCreator(ENTITY_TYPE_UNIT);
    }

    onDelete = (id) => {
        console.log("Delete");
        console.log(id);
        this.props.deleteDataActionCreator(ENTITY_TYPE_UNIT, id);
    }

    render() {
        // axios.get('http://178.128.248.160:81/api/unit', {
        //     headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczMjQyMjEsImV4cCI6MTU5NzMyNTEyMSwiaWF0IjoxNTk3MzI0MjIxfQ.VVkxPM99eGT1grH7XHt4J8pHv7OO0Xlxo-Abaxbqn0U' }
        // })
        //     .then(response => this.props.dispatch(setDataActionCreator(ENTITY_TYPE_UNIT,response.data.data)))
        //     .catch(err => console.log(err));
        //throw("My Exception"); //Testing for ErrorCatcher
        const result = this.props.units && this.props.units.length > 0 ?
          <table className="ui selectable celled table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>            
            <BasicDataTable data={this.props.units} onDelete={this.onDelete}  /> 
            </table> :
            <div>No data</div>;
        return <div className="ui container">
            <button onClick={this.onLoadData}>LOAD DATA</button>
            {result}</div>
    }

}

const mapStateToProps = state => { return { units: state?.units ?? [] } }

export default connect(mapStateToProps, {loadDataActionCreator, deleteDataActionCreator} )(Unit)