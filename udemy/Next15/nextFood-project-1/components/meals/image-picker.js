'use client'

import css from './image-picker.module.css'
import {useRef, useState} from "react";
import Image from "next/image";
const ImagePicker = ({label, name}) => {
    const [pickedImage, setPickedImage] = useState();
    const imageRef = useRef();
    const handleClick = () => {
        imageRef.current.click();
    }

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        if(!file) {
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file)
    }

    return (
        <div className={css.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={css.controls}>
                <div className={css.preview}>
                    {!pickedImage && <p>Preview doesn't download yet</p>}
                    {pickedImage && <Image src={pickedImage} fill />}
                </div>
                <input
                    className={css.input}
                    type="file"
                    id='image'
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={imageRef}
                    required
                    onChange={handleOnChange}
                />
                <button
                    className={css.button}
                    type={'button'}
                    onClick={handleClick}
                >
                    Pick an image
                </button>
            </div>
        </div>
    )
}
export default ImagePicker
