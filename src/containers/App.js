import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/CockPit/CockPit';

// import UserOutput from './User/UserOutput';
// import UserInput from './User/UserInput';

class App extends Component {
  state = {
      persons: [
        {id: 'ghj', name:'Jimmy', age: 32},
        {id: 'hjm', name:'Gabriella', age: 27},
        {id: 'gb', name:'Hayley', age: 3}
      ],
      otherState: 'someting else',
      showPersons: false
  }



  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons:persons})
  }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
    })
    const person = {...this.state.persons[personIndex]
    }; 
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons:persons });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons:!doesShow})
  }
  render() {

    let persons = null;
    if (this.state.showPersons){
      persons =  <Persons 
          persons={this.state.persons}
          changed={this.nameChangeHandler}
          clicked={this.deletePersonHandler}/>    
    };

    return (
      <div className="App">
        <CockPit title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
