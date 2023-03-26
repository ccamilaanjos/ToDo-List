 const validateTitle = (req, res, next) => {
    const { body } = req;

    if(body.title === undefined){
        return res.status(400).json({ message: "The field 'title' is required"});
    }
    if(body.title === ''){
        return res.status(400).json({ message: "Title cannot be empty"});
    }
    next();
 };

 const validateStatus = (req, res, next) => {
    const { body } = req;

    if(body.status != 'Pending' && body.status != 'Done' && body.status != 'In progress'){
        return res.status(400).json({ message: "Invalid status"});
    }
    if(body.status === ''){
        return res.status(400).json({ message: "Status cannot be empty"});
    }
    if(body.status === undefined){
        return res.status(400).json({ message: "The field 'status' is required"});
    }
    next();
 }

 module.exports = {
    validateTitle,
    validateStatus
 }