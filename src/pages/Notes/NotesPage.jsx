import { useState } from "react";
import "./NotesPage.css";
import useLocalStorage from "../../hooks/useLocalStorage";

function NotesPage() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [notes, setNotes] = useLocalStorage(
    "notes",
    []
  );



  function addNote(){

    if(
      title.trim()==="" ||
      content.trim()===""
    ) return;


    const newNote = {

      id: Date.now(),

      title,

      content,

    };


    setNotes([
      ...notes,
      newNote
    ]);


    setTitle("");

    setContent("");

  }




  function deleteNote(id){

    setNotes(

      notes.filter(
        (note)=>
          note.id !== id
      )

    );

  }




  return (

    <div className="notes-page">


      <div className="welcome">

        <h1>
          📝 Notes
        </h1>

        <p>
          Save your learning notes here.
        </p>

      </div>




      <div className="notes-card">


        <input

          placeholder="Note title..."

          value={title}

          onChange={(e)=>
            setTitle(e.target.value)
          }

        />



        <textarea

          placeholder="Write your notes..."

          value={content}

          onChange={(e)=>
            setContent(e.target.value)
          }

        />



        <button
          onClick={addNote}
        >
          Save Note
        </button>



      </div>





      <div className="notes-list">


      {
        notes.length === 0 ? (

          <p>
            No notes yet 🚀
          </p>

        ) : (

          notes.map((note)=>(

            <div
              className="note-item"
              key={note.id}
            >

              <h3>
                {note.title}
              </h3>


              <p>
                {note.content}
              </p>



              <button

                onClick={() =>
                  deleteNote(note.id)
                }

              >
                ❌ Delete
              </button>


            </div>

          ))

        )
      }


      </div>


    </div>

  );

}

export default NotesPage;