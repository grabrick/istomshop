import React, { FC, useState } from 'react'
import m from './Slider.module.css'

type TSlider = {
    images: string[]
}

const Slider: FC<TSlider> = ({ images }: TSlider) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    return (
        <div className={m.slider}>
            <div className={m.sliderWrapper}>
                <button className={m.btnBack} onClick={prevSlide}></button>
                <img className={m.img} src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
                <button className={m.btnNext} onClick={nextSlide}></button>
            </div>
        </div>
    );
}

export default Slider