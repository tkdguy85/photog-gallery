import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modals';
import Title from './comps/Title';
import Form from './comps/Uploads';

function App() {
	const [selectedImg, setSelectedImg] = useState(null);

	return (
		<div className='App'>
			<Title />
			{/* <Form /> */}
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && (
				<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
			)}
		</div>
	);
}

export default App;
