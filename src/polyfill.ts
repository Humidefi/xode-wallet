import * as process from 'process';
import * as buffer from 'buffer';

(window as any).global = window;
// global.Buffer = global.Buffer || require('buffer').Buffer;
// global.process = require('process');
window.global.Buffer = global.Buffer || buffer.Buffer;
window.global.process = process;

(window as any).process = {
  env: { DEBUG: undefined, EXTENSION_PREFIX: 'XODE_WALLET' },
};
// import * as process from 'process';
// window['process'] = process;
