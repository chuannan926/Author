const controller = require("./controller");

module.exports = function(app){
    app.get('/Author', controller.index)
    app.post('/Author', controller.new_author)

    app.get('/Author/:id', controller.one_author)
    app.patch('/Author/edit/:id', controller.update_author)
    
    app.delete('/delete/:id', controller.delete_author)

}