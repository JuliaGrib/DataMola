const moduleTasks = (function(){
    const user = 'Julia Grib';

    function isValidateId(id){
        return typeof id === 'string' ? true : false;
    }

    function getTask(id) {
        if(isValidateId(id)) {
            return tasks.find(task => task.id === id) || new Error(errors.taskNotFound);
        }
        return new Error(errors.invalidValue);
    }

    function removeTask(id){
        if(isValidateId(id)){
            let index = tasks.findIndex(task => (task.id === id) && (task.assignee === user));
            if(index > 0){
                tasks.splice(index, 1);
                return true;
            }
            return false; 
        }
        return new Error(errors.invalidValue);
    }

    return {
        getTask,
        removeTask,
    }
}());

