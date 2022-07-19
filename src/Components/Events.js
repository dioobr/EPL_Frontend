import React from 'react';
import Moment from 'moment';

function Event(props) {
	let ev = props.ev,
		dt = Moment(ev.dateEvent).format('LL');
	return (
		<div className="item">
			<div className="date">{dt}</div>
			<div className="sctm">
				<div className="team home" style={{backgroundImage: 'url(https://backend-api.raketech.com.local/teams/badge/tiny/'+ev.idHomeTeam+'.png)'}}>
					<span>{ev.strHomeTeam}</span>
				</div>
				<div className="score">{ev.intHomeScore} - {ev.intAwayScore}</div>
				<div className="team away" style={{backgroundImage: 'url(https://backend-api.raketech.com.local/teams/badge/tiny/'+ev.idAwayTeam+'.png)'}}>
					<span>{ev.strAwayTeam}</span>
				</div>
			</div>
			<div className="place">{ev.strVenue}</div>
		</div>
	)
}

function Loading(){
	return (
		<div className="loading">
			<div className="lds-ring">
				<div></div><div></div><div></div><div></div>
			</div>
			<div className="txt">loading information...</div>
		</div>
	)
}

class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			loaded: false,
			items: []
		};
	}	
	
	componentDidMount() {
		fetch("https://backend-api.raketech.com.local/events/past")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({loaded: true, items: result.data});
				},			
				(error) => {
					this.setState({loaded: true, error});
				}			
			);
	}
	
	render(){
		const { error, loaded, items } = this.state;

		if(error) {
			return <div>Error: {error.message}</div>;
		} else if (!loaded) {
			return <Loading />;
		} else {
			return (
				<div className="events">
					<h1>Latest Results</h1>
					<div className="listEvents">
					{items.map(item => (
						<Event key={item.idEvent} ev={item} />
					))}
					</div>
				</div>
			);
		}
	}
}

export default Events;