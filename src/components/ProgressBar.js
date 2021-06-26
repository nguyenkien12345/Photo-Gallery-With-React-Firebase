import React, { useEffect } from 'react';
import useStorage from '../hook/useStorage';

function ProgressBar({file, setFile}) {
    
    const {url, progress} = useStorage(file);
    // console.log(url,progress); //=> Debug

    useEffect(() => {
        // Nếu url đạt đến 100%
        if(url){
            setFile(null);
        }
    }, [url, setFile]) // Không có setFile cũng không sao, có setFile cũng không ảnh hưởng gì đến code

    return (
        <div className='progress-bar' style={{width: progress + '%'}}></div>
    )

}

export default ProgressBar;


