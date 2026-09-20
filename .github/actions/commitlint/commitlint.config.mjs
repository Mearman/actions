// Conventional commit rules, matching the git hooks. This file ships with the commitlint composite action and is copied into place by it; repositories do not carry their own copy.
export default {
  // The header pattern is the conventional-commits form, including the optional "!" breaking change marker before the colon. commitlint's default parser does not accept the marker, so it is stated here rather than pulled in from a preset package, which keeps the action free of extra installs.
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test',
      'build', 'ci', 'chore', 'revert',
    ]],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'header-max-length': [2, 'always', 100],
  },
};
