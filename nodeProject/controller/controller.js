const axios = require('axios')

module.exports.getCommits = async (req, res) => {
    return res.status(200).json({ success: true });
};

module.exports.getBranches = async (req, res) => {
    const { gitHubUser , repoName} = req.params

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
            res.status(error.response.status).send(error)
        });
};
