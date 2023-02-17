const express = require('express');
const NoteRouter = express.Router();
const { NoteModel } = require('../model/Note.model');

NoteRouter.get('/', async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.send(notes);
  } catch (err) {
    console.log({ "err": err.message });
  }
});

NoteRouter.post('/create', async (req, res) => {
  const payload = req.body;
  try {
    const note = new NoteModel(payload);
    await note.save();
    res.send({ "msg": "New note has been added." });
  } catch (err) {
    console.log({ "err": err.message });
  }
});
NoteRouter.patch('/update/:id', async (req, res) => {
  const id = req.params.id;
  const paylaod=req.body;
  try {
    const note = await NoteModel.findByIdAndUpdate(id,paylaod);
    res.send({ "msg": "updated the note." });
  } catch (err) {
    console.log({ "err": err.message });
  }
});
NoteRouter.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const note = await NoteModel.findByIdAndDelete(id);
    res.send({ "msg": "Note has been deleted." });
  } catch (err) {
    console.log({ "err": err.message });
  }
});

module.exports = {
  NoteRouter
};
