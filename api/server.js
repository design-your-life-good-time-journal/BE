const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../routes/users-router.js');
const authRouter = require('../routes/auth/auth.js')
const journalsRouter = require('../routes/journals-router.js');
const Ref = require('../models/reflections')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);
server.use('/auth', authRouter);
server.use('/journals', journalsRouter);


// if this message changes the server has been changed
let now = new Date().getTime();
var randomMessage = ["ONLINE","Active","Ready","Server Up"];
//this prints out on the console, feel free to add whatever messages you want
var message = randomMessage[Math.floor(Math.random() * randomMessage.length)];

server.get('/', (req,res) => {
  try {
  res.send(`${message} <${now}>`);
  } catch(error) {
    res.status(500).json(error.response);
  }
});

server.get('/reflections', (req,res)=>{
  Ref.find()
  .then(teams =>{
      if (teams) {
          res.status(200).json(teams);
        } else {
          res.status(404).json({ error: 'no reflection found.' });
        }
  })})

server.get('/reflections/:id', (req, res) => {
  Ref.findById(req.params.id)
    .then(team => {
      res.status(200).json(team);
    })
    .catch(error => 
      res.status(500).json({ error: 'this is not the reflection you are looking for.'}));
});

server.post('/reflections',  (req, res) => {
  let team = req.body;
  const { note} = req.body;
  if (!note ) {
  res.status(400).json({ message: 'Please provide your reflection information.' });
  } 
  Ref.add(team)
    .then(team => {
      res.status(201).json(team);
    })
    .catch(error => 
      res.status(500).send(error));
});

module.exports = server;