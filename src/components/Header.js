import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {AppBar, Toolbar, IconButton} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

/**
 * Header component.
 */
class Header extends Component {
    render () {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Menu"
                    >
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles({})(Header);