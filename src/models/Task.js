/**
 * Describes the task.
 */
class Task {
    /**
     * @param {Number} id task identifier.
     * @param {String} title text of a task.
     * @param {Boolean} done status of a task.
     */
    constructor(id, title, done = false) {
        this._id = id;
        this._title = title;
        this._done = done;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    /**
     * @returns {Boolean}.
     */
    get done() {
        return this._done;
    }

    /**
     * @param {Boolean} value.
     */
    set done(value) {
        this._done = value;
    }

    static copyWithNewStatus(task, status) {
        return new Task(task.id, task.title, status);
    }
}

export default Task;