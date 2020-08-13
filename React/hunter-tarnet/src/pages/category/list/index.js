import React from 'react';
import axios from 'axios';
import DataTable from '../../../components/data-table';
export default class CategoryList extends React.Component {
    state = { data: [] }
    render() {
        //throw("My Exception"); //Testing for ErrorCatcher
        const result = this.state.data.length > 0 ? <DataTable data={this.state.data} /> : null;
        axios.get('http://178.128.248.160:81/api/category', {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczMDY4NzgsImV4cCI6MTU5NzMwNzc3OCwiaWF0IjoxNTk3MzA2ODc4fQ.VXBOac6K45-Ozh1cK3aAsdy6YI4aqTQSNg1QJW8R3jc' }
        })
            .then(response => this.setState({ data: response.data.data }))
            .catch(err => console.log(err));
        return <div className="ui container">{result}</div>
    }
}