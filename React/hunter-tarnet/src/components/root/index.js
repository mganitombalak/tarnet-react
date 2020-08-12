import React from 'react';
import Header from '../header';
import People from '../people'

const Root = () => <div className="ui container">
                        <Header/>
                        <People cardCount={16} />
                    </div>
export default Root;