import React from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https:jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
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