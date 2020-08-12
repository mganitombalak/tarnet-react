import React from 'react';
import axios from 'axios';

export default class CategoryList extends React.Component{
    render(){
        axios.get('http://178.128.248.160:81/api/category',{
            headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTcyNDEwNTksImV4cCI6MTU5NzI0MTk1OSwiaWF0IjoxNTk3MjQxMDU5fQ.4EsaKChs6Aizd7ZChT4pJ4f9hPFEdaOdPqv5COJgLSc'}
        })
        .then(response=>console.log(response.data))
        .catch(err=>console.log(err));
        return <div>CategoryList component!</div>
    }
}