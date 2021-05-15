import React from 'react';
import useFirestore from '../hooks/useFirstore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
	const { docs } = useFirestore('images');

	return (
		<div className='img-grid'>
			{docs &&
				docs.map((doc) => (
					<motion.div
						className='img-wrap'
						key={doc.id}
						layout
						whileHover={{ opacity: 1 }}
						onClick={() => setSelectedImg(doc.url)}>
						<motion.img
							src={doc.url}
							alt='photography stills'
							transition={{ delay: 1 }}
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
						/>
					</motion.div>
				))}
		</div>
	);
};

export default ImageGrid;
