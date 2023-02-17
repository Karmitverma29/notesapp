const mongoose=require('mongoose');

const connection=mongoose.connect('mongodb+srv://karmitverma:karmitverma@cluster0.vr6b5wb.mongodb.net/notesapp?retryWrites=true&w=majority');

module.exports={
    connection
}

