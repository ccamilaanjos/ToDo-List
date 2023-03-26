const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMidlleware = require('./middlewares/tasksMiddleware');
const router = express.Router();


// Cannot GET / = Nenhuma rota na aplicação
// Parâmetros: rota, função de middleware
router.post('/tasks', tasksMidlleware.validateTitle, tasksController.createTask);
router.get('/tasks', tasksController.getAll);
router.put('/tasks/:id', tasksMidlleware.validateTitle, tasksMidlleware.validateStatus, tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;