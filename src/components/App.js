import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Header from './Header';
import ToDoList from "./ToDoList";
import Task from "../models/Task";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper
    }
});

class App extends Component {
    state = {
        tasks: [
            new Task(1, 'Walk with a dog'),
            new Task(2, 'Drink coffee'),
            new Task(3, 'Write few lines')
        ]
    };

    taskStateChanged = (id, done) => {
        const {tasks: taskList} = this.state;

        const taskIndex = taskList.findIndex((task) => task.id === id);

        this.setState({
            tasks: Object.assign(
                [...this.state.tasks],
                {[taskIndex]: Task.copyWithNewStatus(taskList[taskIndex], done)}
            )
        })
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Header/>
                <ToDoList
                    undone={this.state.tasks}
                    onTaskStateChanged={this.taskStateChanged}
                />
            </div>
        );
    }
}

export default withStyles(styles)(App);