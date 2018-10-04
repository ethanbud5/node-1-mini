var books = [];
var id = 0;

module.exports = {
    read:(req,res)=>{
        res.status(200).json(books);
    },
    create:(req,res)=>{
        books.push({
            id:id,
            title:req.body.title,
            author:req.body.author
        })
        id++
        res.status(200).json(books);
    },
    update:(req,res)=>{
        let idToUpdate =  req.params.id;
        let indexOfBook = books.findIndex(book=>book.id ==idToUpdate);
        books[indexOfBook] = {
            id:books[indexOfBook].id,
            title:req.body.title,
            author:req.body.author
        }
        res.status(200).json(books);
    },
    delete:(req,res)=>{
        console.log("going to delete")
        let idToDelete = req.params.id
        let indexToDelete = books.findIndex(book=>book.id==idToDelete);
        books.splice(indexToDelete,1);

        res.status(200).json(books);
    }
}