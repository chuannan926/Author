const Author = require('./models');

module.exports ={
    index:(request,response) =>{
        Author.find({})
        .then(All_Author =>{
            console.log("All_Author");
            response.json(All_Author);
        })
        .catch(err => response.json(err))
    },
    
    new_author:(request, response) =>{
        console.log(request.body);
        Author.create(request.body)
        .then(New_Author =>{
            console.log("Show new author");
            response.json(New_Author);
        })
        .catch(err => response.json(err)) 
    },

    one_author:(request,response) =>{
        console.log("One_Author ID:",request.params.id);
        Author.findById({_id : request.params.id})
        .then(One_Author =>{
            console.log("found one_author", One_Author);
            response.json(One_Author);
        })
        .catch(err => response.json(err)) 
    },

    update_author:(request, response) =>{
        console.log("this author ID", request.params.id);
        Author.findOneAndUpdate({_id: request.params.id}, request.body)
        .then(Edit_Author =>{
            console.log("update this_author", Edit_Author);
            response.json(Edit_Author);
        })
        .catch(err => response.json(err)) 
    },
    
    delete_author:(request, response) =>{
        console.log("bye bye bye");
        Author.findByIdAndRemove({_id:request.params.id})
        .then(Delete_Author =>{
            response.json(Delete_Author)
        })
        .catch(err =>response.json(err))
    },


}
