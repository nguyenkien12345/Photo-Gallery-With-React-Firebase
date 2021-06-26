import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {

    const [file, setFile] = useState(null);

    const [error, setError] = useState(null);

    const types = ['image/jpeg','image/jpg','image/png'];

    const onHandleChange = (e) => {
        // console.log(e.target.files[0])   //=> Debug
        let selected = (e.target.files[0]); //=> Trong selected ta sẽ cần dùng đến các thuộc tính như name,size,type...
        if(selected && types.includes(selected.type)){ 
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('Please Select An Image File (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type='file' onChange={onHandleChange}/>
                <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file  && <div>{file.name}</div>}
                {file  && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )

}

export default UploadForm;
