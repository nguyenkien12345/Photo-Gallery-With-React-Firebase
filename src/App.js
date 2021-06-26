import React, {useState} from 'react';
import './App.css';
// Components
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {

  // Khi ta click vào ảnh trong modal nó sẽ setSelectedImage, lúc này ta đã có selectedImage và ta sẽ truyền vào modal
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='App'>
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
  
}

export default App;