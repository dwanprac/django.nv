module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  includeForks: true,
  extends: ["@fds:web", "@fds:python"],
  repositories: [
    'renovatebot/github-action'
  ]
};
