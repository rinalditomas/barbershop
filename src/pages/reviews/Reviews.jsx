import React, { useState } from 'react'
import './Reviews.css'
import { PAGES } from '../../config/text'


const Reviews = () => {
    const [current, setCurrent] = useState(0)
    const length = PAGES.REVIEWS.length

    const nextSlide = () => {
        
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

    return (
        <div className='container'>
            <ion-icon id='previous' name="arrow-back-outline" onClick={prevSlide} ></ion-icon>
            <ion-icon id='next' name="arrow-forward-outline" onClick={nextSlide}></ion-icon>
            {
                PAGES.REVIEWS.map((review,index)=>{
                    return(
                        <div
                         className={index === current ? "slide active" : "slide"}
                        key={index}>

                            {
                                index=== current && (
                                    <>
                                    <div className="slide-image">
                                    <img src={review.img} alt={PAGES.NOTFOUND} />
                                 </div>
                                 <div className="slide-information">
                                     <p className='review'>{review.review}</p>
                                     <p className='by'>{review.by}</p>
                                     
                                 </div>
                                 </>
                                )
                            }
                         

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reviews
