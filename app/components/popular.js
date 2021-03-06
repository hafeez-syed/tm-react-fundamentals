import {API} from '../utils/api';

import PropTypes from 'prop-types';
import React from 'react';

function SelectLanguage(props) {
    let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='languages'>
            {
                languages.map((language) => {
                    return (
                        <li
                            style={language === props.selectedLanguage ? {color: '#d0021b'} : null}
                            onClick={props.onSelect.bind(null, language)}
                            key={language}>
                            {language}
                        </li>
                    )
                })
            }
        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

function RepoGrid(props) {
    return (
        <ul className='popular-list'>
            {props.repos.map((repo, index) => {
                return (
                <li key={repo.name} className='popular-item'>
                    <div className='popular-rank'>#{index + 1}</div>
                    <ul className='space-list-items'>
                        <li>
                            <img
                                className='avatar'
                                src={repo.owner.avatar_url}
                                alt={`Avatar for ${repo.owner.login}`}
                            />
                        </li>
                        <li><a href={repo.html_url}>{repo.name}</a></li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
};

export class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        //this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage = (language) => {
        this.setState(() => {
           return {
               selectedLanguage: language,
               repos: null
           }
        });

        API.fetchPopularRepos(language)
            .then((repositories) => {
                this.setState(() => {
                    return {
                        repos: repositories
                    }
                });
            })
    };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    render() {
        return(
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage} />
                {!this.state.repos
                    ? <p>Loading...</p>
                    : <RepoGrid repos={this.state.repos}/>
                }
            </div>
        )
    }
}