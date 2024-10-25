import express from "express";

const app = express();
app.use(express.json());

const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' },
    { id: 4, name: 'David', age: 20, major: 'Web developement'}
];

app.get("/", (req, res) => {
    res.send("Server system online")
})

app.get("/students", (req, res) => res.send(students));

app.get("/students/:id", (req, res) => {
    const { id } = req.params;
    const studentSearch = students.find((student) => student.id === parseInt(id));
    if (studentSearch) {
        res.status(200).send(studentSearch)
    } else {
        res.status(404).send({ message: "Student not found" })
    }
})

app.post("/students", (req, res) => {
    const newStudent = req.body;
    console.log(newStudent.name);
    
    const signedStu = students.some((student) => (student.id === parseInt(newStudent.id)));
    console.log(signedStu);
    
    if (signedStu) {
        res.status(404).send({ message: "Student already exists" })
    } else {
        students.push(newStudent)
        res.status(201).send([{message: "Student succesfully signed"}, {newStudent}])
        return
    }
})

app.delete("students/:id", (req, res) => {
    const { id } =  req.params;
    
    const studentIndex = students.findIndex((student) => (student.id === parseInt(id)));
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        res.status(200).send(students)
        return
    } else {
        res.status(404).send({ message: "Student not found" })
    }

})

app.listen(3000, () => {
    console.log('currently running on port 3000');
})


const resta = (a, b) => {
    if (a  > b) {
        return a - b
    } else if (b > a) {
        return b - a
    } if  (a || b  === 0) {
        return console.log('You can not do that');
    }
};

resta(48, 49);