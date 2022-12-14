const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "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",
});

octokit.rest.repos.createDeployment({
  owner: "sika-example-user",
  repo: "gs-1",
  ref: "f8013c941ebd235bcd099aaf782298392b7a2bfd",
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

