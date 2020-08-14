import React from 'react';
import axios from 'axios';
import DataTable from '../../../components/data-table';
import { connect } from 'react-redux';
import { loadDataActionCreator,deleteDataActionCreator, ENTITY_TYPE_CATEGORY } from '../../../actions';
export class CategoryList extends React.Component {
    // state = { data: [] }

    onLoadData = () => {
       
        this.props.loadDataActionCreator(ENTITY_TYPE_CATEGORY);
    }

    
    onDeleteData = (id) => {
       console.log("onDeleteData",id)
        this.props.deleteDataActionCreator(ENTITY_TYPE_CATEGORY,id);
    }
    render() {
        const result = this.props.kategoriler && this.props.kategoriler.length > 0 ?
            <DataTable data={this.props.kategoriler} onDeleteRow={this.onDeleteData} /> :
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

const mapStateToProps = state => { return { kategoriler: state?.categories ?? [] } }

export default connect(mapStateToProps, { loadDataActionCreator,deleteDataActionCreator })(CategoryList)