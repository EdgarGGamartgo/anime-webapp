import React, { Component } from "react";
import { UserConsumer } from './userContext'
import Action1 from './../assets/action1.jpg';
import Action2 from './../assets/action2.jpg';
import Action3 from './../assets/action3.jpeg';
import Action4 from './../assets/action4.jpg';
import Action5 from './../assets/action5.jpg';
import Drama1 from './../assets/drama1.jpeg';
import Drama2 from './../assets/drama2.jpeg';
import Psy1 from './../assets/psyco1.jpeg';
import ShowByName from './ShowByName.js'

import {withTranslation} from "react-i18next";
import './../animeStyles.css'

class Animes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: false,
            showAction: false,
            showDrama: false,
            showPsy: false,
            showAll: true,
            title: ""
        };
    }

    

    filterSelection = e => {
        e.preventDefault()
        console.log("ANime genre: ", e.target.value)
        this.setState({ title: "" })
        switch(e.target.value) {
            case "all":
                console.log("My all")
                this.setState({ 
                    showPsy: true,
                    showAction: true,
                    showDrama: true
                })
                break
            case "action":
                console.log("My action")
                this.setState({ 
                    showPsy: false,
                    showAction: true,
                    showDrama: false
                })
                break
            case "drama":
                console.log("My drama")
                this.setState({ 
                    showPsy: false,
                    showAction: false,
                    showDrama: true
                })
                break
            case "psy":
                console.log("My psy")
                this.setState({ 
                    showPsy: true,
                    showAction: false,
                    showDrama: false
                })

                break
        }
    }

    submitHandler = e => {
        e.preventDefault()
        this.setState({ navigate: true })
    }

    titleHandler = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const imgStyle = {
            width:'100px',
            heigh: '100px'
          };
        const { navigate, title } = this.state
        const { t } = this.props;

        if (this.state.showAll) {
            return (
                <UserConsumer>
                  {
                      (userInfo) => {
                      return <div>
                                     <h2>ANIMES</h2>
    <div id="myBtnContainer">
      <button value="all" class="btn active" onClick={this.filterSelection} > Show all</button>
      <button value="drama" class="btn" onClick={this.filterSelection}> Drama</button>
      <button value="psy" class="btn" onClick={this.filterSelection}> Psychological</button>
      <button value="action" class="btn" onClick={this.filterSelection}> Action </button>
      <input type="text" name="title" placeholder="Filter by title" value={title} onChange={this.titleHandler} />
    </div>
    
    <div className="row">
      {title ? <ShowByName name={title}/> : null}
      <div className="column action">
          {this.state.showAction ? 
          <div className="content">
          <img src={Action1} alt={"Anime"} style={imgStyle}/>
          <h4><a href={"https://animelon.com/series/Psycho%20Pass"}>Anime 1</a></h4>
          <p>Description..</p>
        </div>
          : <div></div>}
        
      </div>
      <div className="column action">
      {this.state.showAction ? 
        <div className="content">
        <img src={Action2} alt={"Anime"} style={imgStyle}/>
        <h4><a href={"https://animelon.com/series/Death%20Note"}>Anime 2</a></h4>
        <p>Description..</p>
      </div>
          : <div></div>}

      </div>
      <div className="column action">
      {this.state.showAction ? 
        <div className="content">
        <img src={Action3} alt={"Anime"} style={imgStyle}/>
        <h4><a href={"https://animelon.com/series/Shingeki%20no%20Kyojin%20(Attack%20on%20Titan)"}>Anime 3</a></h4>
        <p>Description..</p>
      </div>
          : <div></div>}

      </div>
    
      <div className="column action">
      {this.state.showAction ? 
        <div className="content">
        <img src={Action4} alt={"Anime"} style={imgStyle}/>
        <h4><a href={"https://animelon.com/series/Fullmetal%20Alchemist:%20Brotherhood"}>Anime 4</a></h4>
        <p>Description..</p>
      </div>
          : <div></div>}

      </div>
      <div className="column action">
      {this.state.showAction ? 
        <div className="content">
        <img src={Action5} alt={"Anime"} style={imgStyle}/>
        <h4><a href={"https://animelon.com/series/Sword%20Art%20Online"}>Anime 5</a></h4>
        <p>Description..</p>
      </div>
          : <div></div>}

      </div>
      <div className="column drama">
      {this.state.showDrama ? 
        <div className="content">
        <img src={Drama1} alt={"Anime"} style={imgStyle}/>
        <h4><a href={"https://animelon.com/series/Kill%20la%20Kill"}>Anime 6</a></h4>
        <p>Description..</p>
      </div>
          : <div></div>}

      </div>
    
      <div className="column drama">
      {this.state.showDrama ? 
        <div className="content">
        <img src={Drama2} alt={"Anime"} style={imgStyle}/>
        <h4><a href={"https://animelon.com/series/Kono%20Subarashii%20Sekai%20ni%20Shukufuku%20wo!%20(KonoSuba:%20God's%20Blessing%20on%20This%20Wonderful%20World!)"}>Anime 7</a></h4>
        <p>Description..</p>
      </div>
          : <div></div>}

      </div>
      <div className="column psy">
      {this.state.showPsy ? 
        <div className="content">
        <img src={Psy1} alt={"Anime"} style={imgStyle}/>
        <h4><a href={"https://animelon.com/series/Another"}>Anime 8</a></h4>
        <p>Description..</p>
      </div>
          : <div></div>}

      </div>
    </div> 
                             </div>
                      }
                  }
                </UserConsumer>
            );
        } else {
            return (
                 <div></div>
            )
        }
       
    }
}

export default withTranslation('common')(Animes);
