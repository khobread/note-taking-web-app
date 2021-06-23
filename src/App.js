import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([]);

	function switchNotes(id1, id2) {
		const array = notes.map(note => note.id);
		const idx1 = array.findIndex((id) => id === id1);
		const idx2 = array.findIndex((id) => id === id2);
	
		const array2 = [...notes];
		const temp = array2[idx1];
		array2[idx1] = array2[idx2];
		array2[idx2] = temp;
		
		setNotes(array2);
	};

	const addNote = (text) => {
		const newNote = {
			id: nanoid(),
			text: text,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className="">
			<div className='container'>
				<Header />
				<NotesList
					notes={notes}
					switchNotes={switchNotes}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
