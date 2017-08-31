import { configure } from '@storybook/react';
import '../src/reset.css';
import '../src/general.css';

const req = require.context('../src/components/presentational', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
  // You can require as many stories as you need.
}

configure(loadStories, module);