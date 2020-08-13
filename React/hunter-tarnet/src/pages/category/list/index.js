import React from 'react';
import axios from 'axios';
import DataTable from '../../../components/data-table';
import { connect } from 'react-redux';
import { setDataActionCreator, ENTITY_TYPE_CATEGORY } from '../../../actions';
export class CategoryList extends React.Component {
    // state = { data: [] }
    render() {
        axios.get('http://178.128.248.160:81/api/category', {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczMjMyMTMsImV4cCI6MTU5NzMyNDExMywiaWF0IjoxNTk3MzIzMjEzfQ.-BqG2GYova6Ejuj7BjY7Clb7_WN6_GwisGACsFQqawo' }
        })
            .then(response => this.props.dispatch(setDataActionCreator(ENTITY_TYPE_CATEGORY,response.data.data)))
            .catch(err => console.log(err));
        //throw("My Exception"); //Testing for ErrorCatcher
        const result = this.props.kategoriler && this.props.kategoriler.length > 0 ?
            <DataTable data={this.props.kategoriler} /> :
            <div>No data</div>;
        return <div className="ui container">{result}</div>
    }
}

const mapStateToProps = state => { return { kategoriler: state?.categories ?? [] } }

export default connect(mapStateToProps)(CategoryList)