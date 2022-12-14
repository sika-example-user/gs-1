const { Octokit } = require("@octokit/rest");

const { GITHUB_TOKEN } = process.env;

const github = new Octokit({
  auth: GITHUB_TOKEN,
});

github.rest.repos.createDeployment({
  owner: "sika-example-user",
  repo: "gs-1",
  ref: "main",
  payload: '{ "deploy": "migrate" }',
  description: 'Deploy request from hubot',
  production_environment: true,
  required_contexts: [],
}).then(response => {
  github.rest.repos.createDeploymentStatus({
    owner: "sika-example-user",
    repo: "gs-1",
    deployment_id: response.data.id,
    state: "success",
    comment: "Yesss",
    log_url: "https://google.com",
  })
})

