const moduleTasks = (function(){
    const user = 'Julia Grib';

    function isValidateId(id){
        return typeof id === 'string' ? true : false;
    }

    function findTaskById(id){
        return tasks.find(task => task.id === id);
    }

    function getTask(id) {
        if(!isValidateId(id)) {
            return new Error(errors.invalidValue);
        };
        
        const task = findTaskById(id);
        if(task) {
            return task;
        };

        return new Error(errors.taskNotFound);
    }

    function removeTask(id){
        if(!isValidateId(id)) {
            return new Error(errors.invalidValue);
        };
        if(!findTaskById(id)) {
            return new Error(errors.taskNotFound);
        };

        let delTask;
        tasks = tasks.filter((task) => {
            if(!(task.id === id && task.assignee === user)){
                return true;
            } else {
                delTask = task;
            }
        });

        return delTask ? true : false;
    }

    return {
        getTask,
        removeTask,
    }
}());

