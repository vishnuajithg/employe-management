
const express = require('express');
const app = express();
const path = require('path')

const port = 4000;

app.use(express.json())

const employee = []

app.use(express.static(path.join(__dirname,'public')))

let emp = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

router.get('/',(req,res)=>{
  res.send(emp);
});

router.post('/',(req,res)=>{
  console.log('POST ROUTE REACHED');
  const emp = req.body
  const empwithID = {...emp,id:uuidv4()}
  users.push(empwithID)
  res.send(`User with the name ${emp.firstName} added to the database`)
})

router.get('/:id',(req,res)=>{
  const {id} = req.params
  console.log(id)
  const foundUser = emp.find((user) => user.id == id)
  console.log(foundUser)
  res.send(foundUser)
})

router.delete('/:id',(req,res)=>{
  const {id} = req.params
  console.log(id)
  users = emp.filter((user)=> user.id != id)
  res.send(`User ${users} has been deleted.`)
})

router.patch('/:id',(req,res)=>{
  const {id} = req.params
  const {firstName, lastName, age} = req.body;
  emp = emp.find((user)=> user.id == id)
  if(firstName){
      emp.firstName = firstName
  }
  if(lastName){
      emp.lastName = lastName
  }
  if(age){
      emp.age = age
  }

  res.send(`User ${emp} has been deleted.`)
})

app.post('/submit', (req, res) => {
  const data = req.body.data; 
  console.log('Received data:', data);
  res.json({ message: 'Data received', data: data }); 
});


// app.get('/', (req, res) => {
//   res.sendFile()
// });
// app.get('/employee',(req,res)=>{
//   res.json(employee)
// })
// app.post('/employee',(req,res)=>{
//   const newEmployee = req.body;
//   employee.push(newEmployee);
//   res.status(201).json(newEmployee)
// })
// app.delete('/employee/:id',(req,res)=>{
//   const id = req.params.id;
//   employee = employee.filter(employee => employee.id !== id)
//   res.status(204).send()
// })

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});