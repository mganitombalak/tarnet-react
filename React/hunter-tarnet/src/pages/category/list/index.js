import React from 'react';
import axios from 'axios';
import Datatable from './../../../components/datatable';

export default class CategoryList extends React.Component {
    state = { 
        data: [], 
        columns: ['#', 'name', 'status', 'Createad At', 'Action'],
    }
    render() {
        axios.get('http://178.128.248.160:81/api/category', {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczMDQ3MTQsImV4cCI6MTU5NzMwNTYxNCwiaWF0IjoxNTk3MzA0NzE0fQ.Xn5p09YUiu95_M1egskFHd4HymT1nL5Tuj5ENztVe5o' }
        })
            .then(response => this.setState({ data: response.data.data }))
            .catch (err => console.log(err));
        return (<Datatable columns={this.state.columns} data={this.state.data}></Datatable>)
    }
}