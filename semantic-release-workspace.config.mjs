import { DEFAULT_PUBLISH_PLUGINS } from '@exadev/semantic-release-workspace';

export default {
  branches: ['main'],
  // Release tags double as refs a workflow can pin, so they must not contain the at sign the default format uses.
  tagFormat: '${name}-v${version}',
  // The action packages are private, and a private package gets no GitHub Release unless its plugin list is given explicitly. Consumers read the release notes there, so each action opts back in to the standard list.
  packagePlugins: {
    commitlint: DEFAULT_PUBLISH_PLUGINS,
    'setup-texlive': DEFAULT_PUBLISH_PLUGINS,
  },
};
