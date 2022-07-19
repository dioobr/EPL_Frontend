import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './Components/Home';
import Events from './Components/Events';

import './App.css';

function Menu() {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/events">Events</NavLink>
                </li>
            </ul>
        </div>        
    )
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Menu />
                    <div className="Content">
                        <Routes>
                            <Route exact path='/' element={< Home />}></Route>
                            <Route exact path='/events' element={< Events />}></Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
