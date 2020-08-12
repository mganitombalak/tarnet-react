import React from 'react';
import Header from '../header';
import Card from '../card'

const Root = () => <div className="ui container">
                        <Header/>
                        <div className='ui four column doubling stackable grid container link cards'>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
export default Root;