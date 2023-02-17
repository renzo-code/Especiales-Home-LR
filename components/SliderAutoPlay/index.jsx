import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import Slider from 'react-slick'

const SliderAuto = () => {
  const [ slidesToShow, setSlidesToShow ] = useState(5)
  
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  }

  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined"

    const getWindowDimensions = () => {
      const width = hasWindow ? window.innerWidth : null
      return {
        width
      }
    }

    const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions())

    useEffect(() => {
      if(hasWindow) {
        function handleResize(){
          setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }
    }, [hasWindow])

    return windowDimensions
  }

  const { width } = useWindowDimensions()
  const breakpoint = 1000

  useEffect(() => {
    if(width <= breakpoint){
      setSlidesToShow(3)
    }
    else{
      setSlidesToShow(5)
    }
  },[width])

  return (
    <ContainerCarrousel>
      <h2>LO MÁS VISTO</h2>
      <Slider {...settings}>
        <Content>
          <section>
            <h3>1</h3>
          </section>
          <div>
            <div>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
            </div>
            <h3>
              Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021
            </h3>
          </div>
        </Content>
        <Content>
          <section>
            <h3>2</h3>
          </section>
          <div>
            <div>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
            </div>
            <h3>
              Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021
            </h3>
          </div>
        </Content>
        <Content>
          <section>
            <h3>3</h3>
          </section>
          <div>
            <div>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
            </div>
            <h3>
              Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021
            </h3>
          </div>
        </Content>
        <Content>
          <section>
            <h3>4</h3>
          </section>
          <div>
            <div>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
            </div>
            <h3>
              Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021
            </h3>
          </div>
        </Content>
        <Content>
          <section>
            <h3>5</h3>
          </section>
          <div>
            <div>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
            </div>
            <h3>
              Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021
            </h3>
          </div>
        </Content>
        <Content>
          <section>
            <h3>6</h3>
          </section>
          <div>
            <div>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
            </div>
            <h3>
              Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021
            </h3>
          </div>
        </Content>
      </Slider>
    </ContainerCarrousel>
  )
}

export default SliderAuto

const ContainerCarrousel = styled.div`
  margin: 30px 0;
  background-color: #E7E3E2;

  h2{
    font-size: 25px;
    margin-left: 30px;
    margin-top: 20px;
    font-weight: 900;
    color: red;
    letter-spacing: -1px;
    
    @media (max-width: 450px){
      margin-bottom: 10px;
      margin-top: 10px;
      margin-left: 20px;
    }
  }

`
const Content = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 500px;
  cursor: pointer;

  @media (max-width: 1300px){
    height: 250px;
  }
  @media (max-width: 550px){
    height: 160px;
  }

  section{
    h3{
      font-size: 30px;
      margin: 0 10px;
      text-align: center;
      line-height: 20px;
      color: red;

      @media (max-width: 550px){
        font-size: 23px;
        margin: 0 3px 0 3px;
      }
    }
  }

  div{
    padding: 0 5px;

    div{
      height: auto;
      width: 100%;
      margin-bottom: 10px;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (max-width: 550px){
        display: none;
      }
    }

    h3{
      text-align: left;
      font-size: 17px;
      font-weight: 100;
      line-height: 21px;

      &:hover{
      text-decoration: underline;
      }
    
      @media (max-width: 1300px){
        font-size: 15px;
        line-height: 19px;
      }
      @media (max-width: 450px){
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`