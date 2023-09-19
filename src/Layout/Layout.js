import React, {useState} from 'react';

import './LayoutStyle.css';


const Layout = () => {
    const [card, setCard] = useState();
    const [imgURL, setImgURL] = useState();

    const fireReader = new FileReader();
    fireReader.onloadend = () => {
        setImgURL(fireReader.result);
    }

    const handleOnchange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setCard(file);
        fireReader.readAsDataURL(file);
    }


    return (
        <div className={'layout'}>
            <h1>загрузка файлу</h1>

            <form className={'file-uploader'}>
                <label htmlFor="file-loader-button" className={'file-uploader__custom-button'}>Загрузити файл</label>
                <input
                    id='file-loader-button'
                    type="file"
                    className={'file-uploader__upload-button'}
                    onChange={handleOnchange}
                />

                <img
                    src={imgURL ? imgURL : 'no_photo.jpg'}
                    alt="preview"
                    className={'file-uploader__preview'}
                />

                <div className={'photoName'}>
                    {card ? card.name : 'no_name'}
                </div>
            </form>
        </div>
    );
};


export default Layout;