module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  platform: 'github',
  includeForks: true,
  onboardingConfig:
  {
    extends: ["config:base"]
  },
  repositories: [
    'renovatebot/github-action'
  ],
  
};
