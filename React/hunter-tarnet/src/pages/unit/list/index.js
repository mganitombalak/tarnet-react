import React from 'react';
import axios from 'axios';
import DataTable from '../../../components/data-table';
import { connect } from 'react-redux';
import { setDataActionCreator, ENTITY_TYPE_UNIT } from '../../../actions';
export class UnitList extends React.Component {
    // state = { data: [] }
    render() {
        axios.get('http://178.128.248.160:81/api/unit', {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczMjQ1OTcsImV4cCI6MTU5NzMyNTQ5NywiaWF0IjoxNTk3MzI0NTk3fQ.2_-jkDrUNLccidTWSeGJCpKLlQ6I-iL0mTlwK8mPBoY' }
        })
            .then(response => {
          
                this.props.setDataActionCreator(ENTITY_TYPE_UNIT,response.data.data);
            })
            .catch(err => console.log(err));
  
        const result = this.props.uniteler && this.props.uniteler.length > 0 ?
            <DataTable data={this.props.uniteler} /> :
            <div>No data</div>;
        return <div className="ui container">{result}</div>
    }
}

const mapStateToProps = state => { return { uniteler: state?.unities ?? [] } }

// export default connect(mapStateToProps)(CategoryList)
export default connect(mapStateToProps,{setDataActionCreator})(UnitList)