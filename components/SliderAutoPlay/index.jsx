import React from 'react'

import styled from 'styled-components'
import Slider from 'react-slick'

const SliderAuto = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  }

  return (
    <ContainerCarrousel>
      <h2>LO MÁS LEÍDO</h2>
      <Slider {...settings}>
        <Content>
          <section>
            <h3>1</h3>
          </section>
          <div>
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

  h2{
    font-size: 25px;
    margin-left: 30px;
    margin-bottom: 20px;
    font-weight: bolder;
    color: red;
  }
`
const Content = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 500px;
  /* background-color: red; */
  border-right: 1px solid black;
  cursor: pointer;

  section{
    h3{
      font-size: 30px;
      margin: 0 10px;
      text-align: center;
      line-height: 20px;
      color: red;
    }
  }

  div{
    padding: 0 5px;

    h3{
      text-align: left;
      font-size: 17px;
      font-weight: 100;
      line-height: 21px;

      &:hover{
      text-decoration: underline;
    }
    }
  }
`