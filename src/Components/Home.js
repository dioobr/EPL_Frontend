import { NavLink } from 'react-router-dom';

function Home() {
	return (
		<div className="Home">
			<div className="got">
				<h1>England Premier League</h1>
				<NavLink to="/events">Check latest results</NavLink>
			</div>
			<div className="author">
				<div>This project was developed by <a href="mailto:the@dioobr.com">Diogo Braga</a> for test purposes.</div>
			</div>
		</div>
	)
}

export default Home;