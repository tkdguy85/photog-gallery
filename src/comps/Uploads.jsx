import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Form = () => {
	// Picture file manager
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	// Picture types allowed
	const types = ['image/png', 'image/jpeg'];

	// Monitors picture uploads
	const changeHandler = (e) => {
		let selected = e.target.files[0];
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError('');
		} else {
			setFile(null);
			setError('Only upload png or jpeg file types.');
		}
	};

	return (
		<form action=''>
			{/* Label tags enable adding of photos from page...
					Need new page addition concepts. */}
			{/* <label>
				<input type='file' onChange={changeHandler} />
				<span>+</span>
			</label> */}
			<div className='output'>
				{error && <div className='error'>{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default Form;
