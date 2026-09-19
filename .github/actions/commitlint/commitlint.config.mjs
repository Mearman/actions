// Conventional commit rules, matching the git hooks. This file ships with the commitlint composite action and is copied into place by it; repositories do not carry their own copy.
export default {
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
