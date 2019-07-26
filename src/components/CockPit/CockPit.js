import React, { useEffect } from 'react';
import '../../containers/App.css';

const CockPit = (props) => {

    let classes = [];

    const style={
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '.5rem',
        cursor: 'pointer',
        margin: '1rem',
      };

      if (props.showPersons) {
        style.backgroundColor = 'red';
      }

    if (props.persons.length <= 2){
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    }
    return (
        <div>
            <p className={classes.join(' ')}>{props.title}</p>
            <button style={style}onClick={props.clicked}>
            Show Person</button>
        </div>
    )
}

export default CockPit;