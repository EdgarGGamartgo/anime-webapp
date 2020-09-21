import React, { Component } from "react";
import { UserConsumer } from './userContext'
import Login from "./login.component"
import {withTranslation} from "react-i18next";
import './../App.css';
import './../index.css';



class Contact extends Component {

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
                                <div>{t('welcome.myemail')}</div>
                                <div>{t('welcome.mynumber')}</div>
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

export default withTranslation('common')(Contact);
