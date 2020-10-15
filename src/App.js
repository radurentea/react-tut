import React from 'react';
import { robots } from './Robots.js';
import CardList from './CardList'
import SearchBox from './SearchBox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={ filteredRobots }/>
      </div>
    )
  }
  
}

export default App;