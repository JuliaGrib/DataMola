const moduleTasks = (function(){
    const user = 'Julia';

    function getTask(id) {
        const num = parseInt(id);
        if(Array.isArray(id) || !num) {
            throw new Error(errors.invalidValue);
        };
        return tasks.find(task => task.id === num) || 'Таск не найден';
    }

    return {
        getTask,
    }
}());
