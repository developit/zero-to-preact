// This is the entry file, which kicks off all rendering.
//
// We import h() here because that's the function our JSX elements transpile to.
// That is to say - this:
//     <div a="b">foo</div>
// ... is converted to this:
//     h('div', { a: 'b' }, 'foo')

import { h, render } from 'preact';
import App from './components/app';

render(<App />, document.body);
