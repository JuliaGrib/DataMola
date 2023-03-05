const moduleTasks = (function(){
    const user = 'Julia Grib';

    function isValidateId(id){
        return typeof id === 'string' ? true : false;
    }

    function hasTasksId(id){
        return tasks.find(task => task.id === id);
    }

    function getTask(id) {
        if(!isValidateId(id)) {
            return new Error(errors.invalidValue);
        };
        const task = hasTasksId(id);
        if(!hasTasksId(id)) {
            return new Error(errors.taskNotFound);
        };
        return task;
    }

    function removeTask(id){
        if(!isValidateId(id)) {
            return new Error(errors.invalidValue);
        };
        if(!hasTasksId(id)) {
            return new Error(errors.taskNotFound);
        };
        let index = tasks.findIndex(task => (task.id === id) && (task.assignee === user));
        if(index > 0){
            tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    return {
        getTask,
        removeTask,
    }
}());

