const moduleTasks = (function(){
    const user = 'Julia Grib';

    function isValidTypeId(id){
        return typeof id === 'string';
    }

    function findTaskById(id){
        return tasks.find(task => task.id === id);
    }

    function getTask(id) {
        if(!isValidTypeId(id)) {
            return new Error(errors.invalidValue);
        };

        const task = findTaskById(id);

        return task ? task : new Error(errors.taskNotFound);
    }

    function removeTask(id){
        if(!isValidTypeId(id)) {
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

        //forEach не остановится и будет мне возвращать false несколько раз
        for(let i = 0; i < validateObjKeys.length; i++){
            if(validateObjKeys[i] !== taskKeys[i]) {
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

