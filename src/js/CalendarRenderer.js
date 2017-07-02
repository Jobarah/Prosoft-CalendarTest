import React from 'react';
import Calendar from './Calendar';
import moment from 'moment';

const { Component, PropTypes } = React;

export default class CalendarRenderer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			countryCode: 'US',
			startDate: '2017-06-15',
			daysToSpan: '60',
			calendars: ''
		};

		this.handleChange =  this.handleChange.bind(this);
	}


	render() {
		return (
			<div className = { 'calendarRenderer' }>
				Country Code:
				<input type="text" className={'cc'}value={this.state.countryCode} onChange={this.handleChange} />
				Start Date:
				<input type="text" className={'start-date'} value={this.state.startDate} onChange={this.handleChange} />
				Days to Span:
				<input type="text" className={'days'}value={this.state.daysToSpan} onChange={this.handleChange} />
				{ this.state.calendars }
			</div>
		)
	}
}