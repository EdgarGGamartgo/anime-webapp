import React, { Component } from "react";
import { UserConsumer } from './userContext'
import Login from "./login.component"
import {withTranslation} from "react-i18next";
import './../App.css';
import './../index.css';


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: false,
     
        };
    }

    

    submitHandler = e => {
        e.preventDefault()
        this.setState({ navigate: true })
    }

    render() {
        const { navigate } = this.state
        const { t } = this.props;

        if (!navigate) {
            return (
                <UserConsumer>
                  {
                      (userInfo) => {
                      return <div>
                                    <div>New to Animelon? Check out the video below for a quick introduction, or keep scrolling to see how everything works.</div>
                                    <div>
                                    <iframe width="1000" height="300" src="https://www.youtube.com/embed/meUmHCcjlcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                             </div>
                      }
                  }
                </UserConsumer>
            );
        } else {
            return (
                 <Login/>
            )
        }
       
    }
}

export default withTranslation('common')(About);
