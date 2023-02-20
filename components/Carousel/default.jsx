import React from 'react'

import Slider from "react-slick"
import styled from 'styled-components'

const CarouselPhone = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className='container'>
      <Slider {...settings}>
          <NewsBlock>
            <WrapImg>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt='' />
              <h2>
                TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
                ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
              </h2>
            </WrapImg>
          </NewsBlock>

          <NewsBlock>
            <WrapImg>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt='' />
              <h2>
                TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
                ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
              </h2>
            </WrapImg>
          </NewsBlock>
      </Slider>
      <style jsx="true">{`
          .container{
            display: none;
          }
        @media (max-width: 1020px){
          .container{
            display: block;
          }
        }
      `}</style>
    </div>
  )
}

export default CarouselPhone

const NewsBlock = styled.div`
  height: 350px;
  width: 300px;

  @media (max-width: 940px){
    width: 250px;
    height: 300px;
  }
`
const WrapImg = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;
  overflow: hidden;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;

    &:hover{
      transition: 0.9s;
      transform: scale(1.1);
      filter: grayscale(1);
      cursor: pointer;
    }
  }
  
  h2{
    position: absolute;
    bottom: 0;
    font-size: 19px;
    color: white;
    padding: 10px;
    line-height: 25px;
    word-break: normal;
    
    &:hover{
      text-decoration: underline;
      transition: 0.7s;
    }
  }
`