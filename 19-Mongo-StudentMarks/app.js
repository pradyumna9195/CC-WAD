const mongoose = require('mongoose')
const express = require('express')
const Student = require('./model/student');


const app = express();
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/students').then(() => console.log("Connected to MongoDB")).catch(console.error)

const initialStudent = async () => {
    const total = await Student.countDocuments();
    const data = [
        { name: 'Purav', roll: 22, wad: 40, dsbda: 45, cns: 42, cc: 48, ai: 35 },
        { name: 'Rahim', roll: 25, wad: 35, dsbda: 47, cns: 49, cc: 31, ai: 39 },
        { name: 'John', roll: 66, wad: 50, dsbda: 43, cns: 17, cc: 22, ai: 40 },
        { name: 'Aarav', roll: 12, wad: 48, dsbda: 49, cns: 50, cc: 45, ai: 46 },
        { name: 'Meera', roll: 35, wad: 25, dsbda: 15, cns: 28, cc: 32, ai: 29 },
        { name: 'Nina', roll: 39, wad: 30, dsbda: 33, cns: 27, cc: 38, ai: 41 },
        { name: 'Ravi', roll: 41, wad: 38, dsbda: 50, cns: 45, cc: 40, ai: 42 },
        { name: 'Dev', roll: 18, wad: 28, dsbda: 20, cns: 33, cc: 26, ai: 25 },
        { name: 'Sara', roll: 27, wad: 45, dsbda: 44, cns: 46, cc: 48, ai: 49 },
        { name: 'Kabir', roll: 52, wad: 20, dsbda: 22, cns: 19, cc: 15, ai: 18 }
    ]
    if (total === 0) {
        await Student.insertMany(data)
    }
}
initialStudent();


app.get('/', async (req, res) => {
    const total = await Student.countDocuments();
    const student = await Student.find();

    res.render('index', { total, student })

})

app.get('/dsbda', async (req, res) => {
    const student = await Student.find({
        dsbda: { $gt: 20 }
    })
    res.render('index', { total: student.length, student })
})

app.get('/less', async (req, res) => {
    const student = await Student.find({
        dsbda: { $lt: 40 },
        wad: { $lt: 40 },
    })
    res.render('index', { total: student.length, student })
})

app.get('/update/:name', async (req, res) => {
    const name = req.params.name;
    await Student.updateOne({ name: name }, {
        $inc: { wad: 10, dsbda: 10, cns: 10, cc: 10, ai: 10 }
    });

    res.redirect('/'); 
});

app.get('/all', async (req, res) => {
    const student = await Student.find({
        dsbda: { $gt: 25 },
        wad: { $gt: 25 },
        cns: { $gt: 25 },
        cc: { $gt: 25 },
        ai: { $gt: 25 },
    })
    res.render('index', { total: student.length, student })
})

app.get('/delete/:name' , async(req,res) =>{
    const name = req.params.name;
    await Student.deleteOne( {name : name})
    res.redirect('/')
})

app.listen(3000, () => {
    console.log("Listening at http://localhost:3000")
})