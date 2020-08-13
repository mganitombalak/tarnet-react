import React from 'react';
import axios from 'axios';
import Datatable from './DataTable'

class CategoryList extends React.Component 
{
    state = { data: [] }
    render() 
    {
        axios.get('http://178.128.248.160:81/api/category',
            {
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczMDQ1NTAsImV4cCI6MTU5NzMwNTQ1MCwiaWF0IjoxNTk3MzA0NTUwfQ.fomWU0La-lbq5lJXiCJ937-cTOZAN2tzJR2OSEwqG_Q' }
            })
            .then(response => this.setState({ data: response.data.data }))
            .catch(err => console.log(err));
        return <table className="ui selectable celled table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>
                <Datatable data={this.state.data}></Datatable>
        </table>
    }
}

export default CategoryList;