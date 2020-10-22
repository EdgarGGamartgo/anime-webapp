import React from 'react'
import Action1 from './../assets/action1.jpg';

function Show(props) {
    
    const imgStyle = {
        width:'100px',
        heigh: '100px'
      };

    return (
        <React.Fragment>
            <img src={Action1} alt={"Anime"} style={imgStyle}/>
             <h4><a href={"https://animelon.com/series/Psycho%20Pass"}>{props.showName}</a></h4>
            <p>Description..</p>
        </React.Fragment>
    )
}

export default Show
