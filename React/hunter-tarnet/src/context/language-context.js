import React from 'react';

const LanguageContext = React.createContext({ selectedLanguage: null, onLanguageChanged: null });

export class LanguageProvider extends React.Component {
    state = { selectedLanguage: 'en'};

    onLanguageChanged = lang => this.setState({ selectedLanguage: lang })
    render() {
        return <LanguageContext.Provider value={{ ...this.state, onLanguageChanged: this.onLanguageChanged }}>
            {this.props.children}
        </LanguageContext.Provider>
    }
}
export default LanguageContext;