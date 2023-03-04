const moduleTasks = (function(){
    const user = 'Julia';

    function getTask(id) {
        const num = parseInt(id);
        if(Array.isArray(id) || !num) throw new Error(`Некорректное значение`);
        return tasks.find(item => item.id == num) || 'Таск не найден';
    }

    return {
        getTask,
    }
}());
