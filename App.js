import React, {Component} from 'react';
import Main from "./components/Main/Main.js";
import Login from "./components/Login/Login.js";
import {getTheme, ThemeContext} from "react-native-material-ui";
import colors from "./styles/colors";

const uiTheme = {
    palette: {
        primaryColor: "#56445D",
        secondaryTextColor: "#000000",
        accentColor: "#548687",

    },
    toolbar: {
        container: {
            height: 50,
        },
    },
    card: {
        container: {
            backgroundColor: colors.cardColor,
            padding: 5,
        },

    },

    divider: {
        container: {
            height: 2,
            backgroundColor: colors.dividerColor,
        }
    },


    listItem: {
        container: {
            backgroundColor: colors.listColor,
        }
    }

};


let app = class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }


    loggedIn = () => {
        alert("You successfully logged in!");
        this.setState({
            loggedIn: true,
        })
    }

    render() {

        if (this.state.loggedIn) {
            return <ThemeContext.Provider value={getTheme(uiTheme)}>
                <Main/>
            </ThemeContext.Provider>
        }
        else {
            return <Login loggedIn={() => this.loggedIn()}/>
        }

    }
};

export default app;
