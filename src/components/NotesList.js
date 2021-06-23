import Note from './Note';
import AddNote from './AddNote';
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, switchNotes }) => {

	const [ firstMove, setFirstMove] = useState(null);

	function updateMovingNote(id) { 
		if (firstMove === null) {
			setFirstMove(id);
		} else if (id === firstMove) {
			setFirstMove(null);
		} else {
			switchNotes(firstMove, id);
			setFirstMove(null);
		};
	};

	return (
		<Grid container spacing={2}>
			{notes.map((note) => (
				<Grid item xs={2}>
					<Note  
						id={note.id}
						text={note.text}
						handleDeleteNote={handleDeleteNote}
						updateMovingNote={updateMovingNote}
					/>
				</Grid>
			))}
			{notes.length < 36 ? <AddNote handleAddNote={handleAddNote} /> : null}
		</Grid>
	);
};

export default NotesList;
