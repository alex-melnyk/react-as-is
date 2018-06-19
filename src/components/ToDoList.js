import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Checkbox, List, ListItem, ListItemText} from "@material-ui/core";

const styles = (theme) => ({});

/**
 * Header component.
 */
class ToDoList extends Component {
    render() {
        const {
            undone,
            onTaskStateChanged
        } = this.props;

        return (
            <List>
                {
                    undone.map((item) => (
                        <ListItem
                            key={`task_${item.id}`}
                            button
                            onClick={() => onTaskStateChanged(item.id, !item.done)}
                        >
                            <Checkbox
                                checked={item.done}
                                onChange={(e, checked) => onTaskStateChanged(item.id, checked)}
                            />
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}

export default withStyles(styles)(ToDoList);