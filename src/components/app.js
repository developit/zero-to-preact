import { h, Component } from 'preact';
import Hello from './hello';

export default class App extends Component {
	render() {
		return (
			<div class="app">
				<h1>Hello!</h1>
				<Hello />
			</div>
		);
	}
}
