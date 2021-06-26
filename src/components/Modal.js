import React from 'react';

function Modal({selectedImage, setSelectedImage}) {

    // console.log(selectedImage); // Debug
    const onHandleClick = (e) => {
        // Chúng ta sẽ chỉ thoát modal khi click ra ngoài ảnh còn nếu click vào ảnh không thoát modal
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null);
        }
    }

    return (
        <div className='backdrop' onClick={onHandleClick}>
            <img src={selectedImage} alt='Girl Pictures'/>
        </div>
    )
}

export default Modal;

