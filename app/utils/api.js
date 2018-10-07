export const API = {
    fetchPopularRepos: (language) => {
        let url = `https://api.github.com/search/repositories?q=starts:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`;
        return fetch(url)
            .then(response => response.json())
            .then(data => data.items);
    }
};
