module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  platform: 'github',
  includeForks: true,
  onboardingConfig:
  {
    extends: ["config:base", "@fds:web", "@fds:python"]
  },
  repositories: [
    'renovatebot/github-action'
  ],
  
};
