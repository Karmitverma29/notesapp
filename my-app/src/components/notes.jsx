import { useState, useEffect } from 'react';
import "./notes.css"
function Notes() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

  const handleAddNote = () => {
    const notesdata = {
      title,
      body
    }

    fetch('http://localhost:8080/notes/create',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        "Authorization":localStorage.getItem("token")
      },
      body:JSON.stringify(notesdata)
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    })
    .catch((err) => console.log(err));
  }

  const handleDeleteNote = (id) => {
    fetch(`http://localhost:8080/notes/delete/${id}`,{
      method:'DELETE',
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    })
    .catch((err) => console.log(err))
  }

  const handleUpdateNote = (id, currentTitle, currentBody) => {
    const updatedTitle = prompt("Enter updated title", currentTitle);
    const updatedBody = prompt("Enter updated body", currentBody);

    const notesdata = {
      title: updatedTitle || currentTitle,
      body: updatedBody || currentBody
    }

    fetch(`http://localhost:8080/notes/update/${id}`,{
      method:'PATCH',
      headers:{
        "Content-type":"application/json",
        "Authorization":localStorage.getItem("token")
      },
      body:JSON.stringify(notesdata)
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetch('http://localhost:8080/notes',{
      method:'GET',
      headers:{
        "Authorization":localStorage.getItem("token")
      },
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      setNotes(res);
    })
    .catch((err) => console.log(err))
  }, []);

  return (
    <div id="container">
      <h1>Notes</h1>
      <input id="title" type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <input id="body" type="text" placeholder="Write your note here" value={body} onChange={handleBodyChange} />
      <button onClick={handleAddNote}>Add</button>

      <div id="notes">
        {notes.map(note => (
          <div key={note._id} className="note">
            <h2 className="note-title">{note.title}</h2>
            <p className="note-body">{note.body}</p>
            <button className="note-delete" onClick={() => handleDeleteNote(note._id)}>Delete note</button>
            <button className="note-update" onClick={() => handleUpdateNote(note._id, note.title, note.body)}>Update note</button>
          </div>
        ))}
      </div>
    </div>
  );
        }

        export default Notes;