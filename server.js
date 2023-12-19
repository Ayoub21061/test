import express from 'express';
import users from './models/Task.js';

const app = express();
app.use(express.urlencoded({ extended: true }));


app.post("/add", async function (req, res) {
  const task = new users();
  task.taskName = req.body.task
  await task.save();
  res.redirect('/');
});

app.get("/delete/:id", async function (req, res) {
  await users.delete({ idtasks: req.params.id });
  res.redirect('/');
});

app.get("/", async function (req, res) {
  const tasks = await users.loadMany();
  res.render('listTasks.ejs', { tasks: tasks });
});

app.listen(4000);
