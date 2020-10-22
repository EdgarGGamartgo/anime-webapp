import React from 'react'
import Show from './Show'

const shows = ['Anime 1','Anime 2','Anime 3','Anime 4','Anime 5',
'Anime 6','Anime 7','Anime 8']

function ShowByName(props) {

    const filteredShows = shows.filter(show => show === props.name)

    return (
        <div className="column action">
            <div className="content">
            { filteredShows ? filteredShows.map(show => {
                    return <Show showName={show} /> 
                }) : null  }
            </div>
        </div>
    )
}

export default ShowByName
