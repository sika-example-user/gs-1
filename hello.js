const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "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",
});

octokit.rest.issues.createComment({
  issue_number: 1,
  owner: "sika-example-user",
  repo: "gs-1",
  body: '👋👋'
})
