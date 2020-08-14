import React from 'react';
import axios from 'axios';
import DataTable from '../../../components/data-table';
import { connect } from 'react-redux';
import { loadDataActionCreator, ENTITY_TYPE_CATEGORY, ENTITY_TYPE_UNIT } from '../../../actions';
export class UnitList extends React.Component {
    // state = { data: [] }

    onLoadData = () => {
        // this.props.dispatch(loadDataActionCreator(ENTITY_TYPE_CATEGORY));
        this.props.loadDataActionCreator(ENTITY_TYPE_UNIT);
    }
    render() {
        // axios.get('http://178.128.248.160:81/api/category', {
        //     headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTczOTM2ODcsImV4cCI6MTU5NzM5NDU4NywiaWF0IjoxNTk3MzkzNjg3fQ.zLdfaTI3ftvT7v8zr1C2ojiiidFF4S5eO3qH8aY2ODg' }
        // })
        //     .then(response => {
        //         // this.props.dispatch(setDataActionCreator(ENTITY_TYPE_CATEGORY,response.data.data))
        //         this.props.setDataActionCreator(ENTITY_TYPE_CATEGORY,response.data.data);
        //     })
        //     .catch(err => console.log(err));
        //throw("My Exception"); //Testing for ErrorCatcher
        const result = this.props.birimler && this.props.birimler.length > 0 ?
            <DataTable data={this.props.birimler} /> :
            <div>No data</div>;
        return <div className="ui container">
            <div className="ui animated button" tabIndex="0" onClick={this.onLoadData}>
                <div className="visible content">Load Data</div>
                <div className="hidden content">
                    <i className="play icon"></i>
                </div>
            </div>
            {result}
        </div>
    }
}

const mapStateToProps = state => { return { birimler: state?.units ?? [] } }

// export default connect(mapStateToProps)(CategoryList)
//export default connect(mapStateToProps, { setDataActionCreator })(CategoryList)
export default connect(mapStateToProps, { loadDataActionCreator })(UnitList)