const config = {
  key: '<YOUR PLAYER KEY HERE>',
  location: {
    ui: 'https://domain.tld/path/to/bitmovinplayer-ui.js',
    ui_css: 'styles/bitmovinplayer-ui.css',
  },
};

bitmovin.player('player-id').setup(config);
