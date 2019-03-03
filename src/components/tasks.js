import React, { Component } from 'react';

function Tasks(props) {
    const {tasks} = props
    const body = <section>{tasks.text}</section>
    return(
        <div>
            <h2>{tasks.title}</h2>
            {body}
            <h3>date: {(new Date(tasks.date)).toDateString()}</h3>
        </div>
    )
}

export default App;
