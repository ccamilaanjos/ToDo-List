const connection = require('./connection');

const createTask = async (task) => {
    try {
        const { title, description } = task;
        const newTask = await connection.create({
            title,
            description,
        });
        return newTask;
    }
    catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

const getAll = async () => {
    try {
        const tasks = await connection.findAll();
        return tasks;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

const updateTask = async (id, task) => {
    try {
        const { title, status, description } = task;
        const upTask = await connection.findByPk(id);
        if(upTask){
            upTask.title = title;
            upTask.status = status;
            upTask.description = description;
            upTask.save();
        }
        return upTask;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

const deleteTask = async (id) => {
    try {
        const rmTask = await connection.destroy({where: {id: id}});
        return rmTask;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

module.exports = {
    createTask,
    getAll,
    updateTask,
    deleteTask
};