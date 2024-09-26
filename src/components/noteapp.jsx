import React, { useState } from 'react';
import '../../src/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const NoteApp = () => {
    const [noteList, setNoteList] = useState([{ value: "ABc" }]);

    const addNotes = () => {
        const newNoteList = [...noteList, { value: "" }];
        setNoteList(newNoteList);
    };

    const handleTextChange = (value, index) => {
        const newNoteList = noteList.map((note, ind) => {
            if (ind === index) {
                return { ...note, value };
            }
            return note;
        });
        setNoteList(newNoteList);
    };

    const handleDeleteNote = (index) => {
        const newNoteList = noteList.filter((_, ind) => ind !== index);
        setNoteList(newNoteList);
    };

    return (
        <div>
            <h1 className="heading">Note App</h1>
            <p className="info-text">Double click on a note to remove it</p>
            <div className="app" id="app">
                {noteList.map((note, index) => (
                    <div className="sit" key={index}>
                        <label>Note {index}</label>
                        <textarea
                            className="round"
                            value={note.value}
                            rows={9}
                            onChange={(event) => handleTextChange(event.target.value, index)}
                        />
                        <div className="design" onClick={() => handleDeleteNote(index)}>
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </div>
                    </div>
                ))}
                <button className="btn" id="btn" onClick={addNotes}>
                    +
                </button>
            </div>
        </div>
    );
};

export default NoteApp;
