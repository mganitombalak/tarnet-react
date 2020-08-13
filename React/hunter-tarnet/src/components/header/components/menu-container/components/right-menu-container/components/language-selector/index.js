import React from 'react';
import LanguageContext from '../../../../../../../../context/language-context';

export default class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        return <span>
            <i className="flag tr" onClick={() => this.context.onLanguageChanged('tr')}></i>
            <i className="flag us" onClick={() => this.context.onLanguageChanged('en')}></i>
        </span>
    }
}