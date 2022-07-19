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

function Error(props){
	let i = props.info;
	return (
		<div className="Error">
			<div className="inner">
				<div className="tie">Error <span>{i.code}</span></div>
				<div className="msg">{i.message}</div>
			</div>
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
					this.setState({
						loaded: true,
						error: (result.response.code != "Y001" ? result.response : false),
						items: result.data
					});
				},			
				(error) => {
					this.setState({loaded: true, error});
				}			
			);
	}
	
	render(){
		const { error, loaded, items } = this.state;

		if(error){
			return <Error info={error} /> 
		} else if(!loaded){
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