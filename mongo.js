const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://admin:${password}@personal.lqv6u.mongodb.net/note-app?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    'mongodb+srv://admin:$Venomsony7@personal.lqv6u.mongodb.net/note-app?retryWrites=true&w=majority'
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})


const Note = mongoose.model('Note', noteSchema)

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// const note = new Note({
//     content: 'HTML is Easy',
//     date: new Date(),
//     important: true,
// })
//
// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })
Note.find({important: true}).then(result => {

    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})