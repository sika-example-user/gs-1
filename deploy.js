const { Octokit } = require("@octokit/rest");

const { GITHUB_TOKEN } = process.env;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

octokit.rest.repos.createDeployment({
  owner: "sika-example-user",
  repo: "gs-1",
  ref: "main",
  payload: '{ "deploy": "migrate" }',
  description: 'Deploy request from hubot',
  production_environment: true,
}).then(response => {
  octokit.rest.repos.createDeploymentStatus({
    owner: "sika-example-user",
    repo: "gs-1",
    deployment_id: response.data.id,
    state: "success",
    comment: "Yesss",
    log_url: "https://google.com",
  })
})

