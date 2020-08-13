import React from 'react';
import axios from 'axios';

export default class CategoryList extends React.Component {
    state = { data: [] }
    render() {
        axios.get('http://178.128.248.160:81/api/category', {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczMDI1MzcsImV4cCI6MTU5NzMwMzQzNywiaWF0IjoxNTk3MzAyNTM3fQ.3nVtDPWoQ3BQ18VJ7vT7TRg5ens8dXk64JExqPYjgpE' }
        })
            .then(response => this.setState({ data: response.data.data }))
            .catch (err => console.log(err));
        return <table className="ui selectable celled table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Createad At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map((item,index) => <tr key={index}><td>{item.displayOrder}</td><td>{item.name}</td><td>{item.isActive}</td><td>{item.createdAt}</td><td><i className="trash alternate icon"></i> <i className="edit icon"></i></td></tr>)}
            </tbody>
        </table>
    }
}