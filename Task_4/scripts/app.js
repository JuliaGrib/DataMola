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
            }  delTask = task;
        });

        return delTask ? true : false;
    }

    function validateTask(task){
        const validateObjKeys = Object.keys(validateObj).sort();
        const taskKeys =  Object.keys(task).sort();

        if(validateObjKeys.length !== taskKeys.length) {
            return false;
        }

        for(let i = 0; i < validateObjKeys.length; i++){
            if(!(validateObjKeys[i] === taskKeys[i])){
                return false;
            }
        }

        for(key in task){
            if (!(validateObj[key](task[key]))) {
                return false;
            }
        }
        return true;

    }

    return {
        getTask,
        removeTask,
        validateTask,
    }
}());

