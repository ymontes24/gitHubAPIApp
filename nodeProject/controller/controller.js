const axios = require('axios')

module.exports.getCommits = async (req, res) => {
    try {
        const { gitHubUser, repoName, branchName } = req.params

        var config = {
            method: 'GET',
            url: `${process.env.URLGITHUBAPI}/${gitHubUser}/${repoName}/commits?sha=${branchName}`
        };

        axios(config)
            .then(function (response) {
                let responseCommits = []
                response.data.forEach(element => {
                    responseCommits.push({
                        message: element.commit.message,
                        date: element.commit.committer.date,
                        login: element.committer.login,
                        avatar_url: element.committer.avatar_url
                    })
                })
                responseCommits.sort(function (a, b) {
                    let keyA = a.date
                    let keyB = b.date;
                    if (keyA < keyB) return -1;
                    if (keyA > keyB) return 1;
                    return 0;
                });
                res.status(response.status).send(responseCommits)
            })
            .catch(function (error) {
                res.status(error.response.status).send(error.message)
            });

    } catch (error) {
        res.status(500).send('Internal server error')
    }
};

module.exports.getBranches = async (req, res) => {
    try {
        const { gitHubUser, repoName } = req.params

        var config = {
            method: 'GET',
            url: `${process.env.URLGITHUBAPI}/${gitHubUser}/${repoName}/branches`
        };

        axios(config)
            .then(function (response) {
                let responseBranches = []
                response.data.forEach(element => {
                    responseBranches.push({
                        name: element.name
                    })
                });
                res.status(response.status).send(responseBranches)
            })
            .catch(function (error) {
                res.status(error.response.status).send(error.message)
            });

    } catch (error) {
        res.status(500).send('Internal server error')
    }
};
