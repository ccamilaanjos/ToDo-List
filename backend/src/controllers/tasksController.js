const tasksModel = require('../models/tasksModel');

const createTask = async (req, res) => {
    const newTask = await tasksModel.createTask(req.body);
    return res.status(201).json(newTask);
};

const getAll = async (_, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.updateTask(id, req.body, req.body);
    return res.status(204).json();
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.deleteTask(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createTask,
    updateTask,
    deleteTask   
};