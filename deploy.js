const { Octokit } = require("@octokit/rest");

const { GITHUB_TOKEN } = process.env;

const github = new Octokit({
  auth: GITHUB_TOKEN,
});


(async function() {

deployment = await github.rest.repos.createDeployment({
  owner: "sika-example-user",
  repo: "gs-1",
  ref: "main",
  description: 'Deploy request from hubot',
  production_environment: true,
  required_contexts: [],
})

github.rest.repos.createDeploymentStatus({
  owner: "sika-example-user",
  repo: "gs-1",
  deployment_id: deployment.data.id,
  state: "success",
  comment: "Yesss",
  log_url: "https://ccc.oxs.cz",
})

})();


