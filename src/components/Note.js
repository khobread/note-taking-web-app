import { MdDeleteForever } from 'react-icons/md';
import { useState, useEffect } from 'react';

function Note({id, text, handleDeleteNote, updateMovingNote}) {

	const [edit, setEdit] = useState(false);
	const [noteText, setNoteText] = useState(text);
	/*const [highlight, setHighlight] = useState("highlight");*/
	const characterLimit = 255;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			setEdit(false);
		}
	};

	/*const handleHighlight = () => {
		if (highlight = "highlight") {
			setHighlight("");
		}
	}
	
	useEffect(() => {
		setHighlight("highlight");
	}, "");
	*/

	useEffect(() => {
		setNoteText(text);
	}, [text]);

	if (edit !== true) {
		return (
			<div className='note' onClick={() => updateMovingNote(id)} /*onClick={() => handleHighlight("highlight")}*/>
				<span>{noteText}</span>
				<div className='note-footer'>
					<button
						onClick={() => setEdit(true)}
					>
					Edit
					</button>
					<MdDeleteForever
						onClick={() => handleDeleteNote(id)}
						className='delete-icon'
						size='1.3em'
					/>
				</div>
			</div>);
	} else {
		return (
			<div className='note-new'>
				<textarea
					rows='10'
					cols='10'
					placeholder='Type to Add Your Note'
					value={noteText}
					onChange={handleChange}
				></textarea>
				<div className='note-footer'>
					<small>
						{characterLimit - noteText.length} Remaining
					</small>
					<button className='save' onClick={handleSaveClick}>
						Change
					</button>
				</div>
			</div>
		)
	};
};

export default Note;
