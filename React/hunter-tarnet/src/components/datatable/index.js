import React from 'react';
import Row from './row'
import Hedaer from './header'

const Datatable = props=>{

        return <table>
                <Header headers={props.headers}>

                </Header>

                <Body data={props.data} columns={props.columns}>


                </Body>




        </table>






}

export default Datatable ;