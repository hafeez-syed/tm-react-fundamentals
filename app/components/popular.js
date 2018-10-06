import React from 'react';

export class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
    }


    updateLanguage(language) {
        this.setState(() => {
           return {
               selectedLanguage: language
           }
        });
    }

    render() {
        let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

        return(
            <ul className='languages'>
                {
                    languages.map((language) => {
                        return (
                            <li
                                style={language === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                                onClick={this.updateLanguage.bind(this, language)}
                                key={language}>
                                {language}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}