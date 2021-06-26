import React from 'react';
import useFireStore from '../hook/useFireStore';
import  { motion } from 'framer-motion';

function ImageGrid({setSelectedImage}) {

    const {docs} = useFireStore('images');
    // console.log(docs) // Debug

    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                //// motion.div có nghĩa là thêm hiệu ứng cho thẻ div được chọn. layout whileHover={{opacity: 1}} là hiệu ứng mà ta thêm
                <motion.div className='img-wrap' key={doc.id} onClick={() => setSelectedImage(doc.url)} layout  whileHover={{opacity: 1}}>
                    <motion.img src={doc.url} alt={doc.name} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;
