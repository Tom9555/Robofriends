import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/searchBox";
import "./App.css";
import Scroll from "../Components/Scroll";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((Response) => Response.json())
			.then((users) => {
				this.setState({ robots: users });
			});
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name
				.toLocaleLowerCase()
				.includes(searchfield.toLocaleLowerCase());
		});
		if (!robots.length) {
			return <h1> loading </h1>;
		}
		return (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
