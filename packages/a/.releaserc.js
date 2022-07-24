module.exports = {
  extends: "semantic-release-monorepo",
  ci: false,
  branches: ['main'],
  plugins: [
    [
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', {
      npmPublish: false,
    }],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message:
          'chore(release-a): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ]
  ],
};
