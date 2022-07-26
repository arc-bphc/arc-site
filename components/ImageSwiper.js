import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from './Image'
import styles from './styles/animation.module.css'

function ImageSwiper({ imageArray }) {
  return (
    <>
      <div
        style={{
          display: 'inline',
          fontStyle: 'italic',
          color: '#a6bfbb',
          textDecoration: 'dashed underline',
        }}
      >
        Swipe to see more images
      </div>
      <div className={styles.fade}> -&gt;</div>
      <Swiper spaceBetween={10} slidesPerView={1}>
        {imageArray.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={image} alt="slide" width="500" height="500" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default ImageSwiper
