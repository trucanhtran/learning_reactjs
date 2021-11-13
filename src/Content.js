import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

const Content = () => {
  const [avatar, setAvatar] = useState()

  useEffect(() => {

    //clean up
    return () => {
     avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]

    file.preview = URL.createObjectURL(file)

    setAvatar(file)
  }

  return (
    <div className="Content">
      <input
        type="file"
        onChange={handlePreviewAvatar}
      />
      {
        avatar && (<img src={avatar.preview} alt="" width="80%"/>)
      }
    </div>
  );
}

export default Content;
