import React, { Component } from 'react';
import router from './utils/routes.js';


export default class App extends Component {
	render(){
		return (
			<div className='App'>
				{ router }
      </div>
		)
	}
}
