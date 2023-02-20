import { useState } from "react"
import styled from "styled-components"

import NoticeCard from "../NoticeCard"
import Icon from "../Icon"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import SliderAuto from "../SliderAutoPlay"
import Historys from "../Historys"
import Carousel from "../Carousel"
import CarouselPhone from "../Carousel/default"

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="container">
        <div className="bloc-tabs">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <Icon icon={faHouse}/>
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <h2 className="title-tabs">
              POLÍTICA
            </h2>
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <h2 className="title-tabs">
              ACTUALIDAD
            </h2>
          </div>
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <h2 className="title-tabs">
              HISTORIAS
            </h2>
          </div>
          <div
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            <h2 className="title-tabs">
              SUPLEMENTOS
            </h2>
          </div>
          <div
            className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(6)}
          >
            <h2 className="title-tabs">
              TRIVIAS
            </h2>
          </div>
        </div>

        <Historys/>
        <CarouselPhone/>
        {/* <Carousel/> */}
        <SliderAuto/>       

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <WrapperNotices>
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
            </WrapperNotices>
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <WrapperNotices>
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
            </WrapperNotices>
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <WrapperNotices>
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
            </WrapperNotices>
          </div>

          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            <WrapperNotices>
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
            </WrapperNotices>
          </div>

          <div
            className={toggleState === 5 ? "content  active-content" : "content"}
          >
            <WrapperNotices>
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
              <NoticeCard
                title="Eduardo Pachas fue contratado por S/75.000 en el despacho presidencial de Castillo durante 2021"
                image="https://imgmedia.larepublica.pe/230x129/larepublica/original/2023/02/08/63e3b6dcdee39520f21a317c.webp"
              />
            </WrapperNotices>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .container {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          height: auto;
          margin: 20px auto 0;
          word-break: break-all;
        }
        .bloc-tabs {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .tabs {
          padding: 15px;
          text-align: center;
          width: 150px;
          //background: rgba(128, 128, 128, 0.075);
          cursor: pointer;
          //border-bottom: 1px solid rgba(0, 0, 0, 0.274);
          box-sizing: content-box;
          position: relative;
          outline: none;
        }
        @media (max-width: 930px){
          .tabs {
            width: auto;
            padding: 10px;
          }
          .title-tabs{
            font-size: 14px !important;
          }
        }
        .tabs:hover{
          color: red;
          transition: 0.8s;
        }
        .title-tabs{
          font-size: 16px;
        }
        .tabs:not(:last-child){
          //border-right: 1px solid rgba(0, 0, 0, 0.274);
        }
        .active-tabs  {
          background: white;
          //border-bottom: 1px solid transparent;
        }
        .active-tabs::before {
          content: "";
          display: block;
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% + 2px);
          height: 5px;
          background: #FF0000;
        }
        button {
          border: none;
          background-color: white;
        }
        .content-tabs {
          flex-grow : 1;
          width: 90%;
          margin: 0 auto;
        }
        .content {
          background: white;
          padding: 20px;
          width: 100%;
          height: 100%;
          display: none;
        }
        .content h2 {
          padding: 0px 0 5px 0px;
        }
        .content hr {
          width: 100px;
          height: 2px;
          background: #222;
          margin-bottom: 5px;
        }
        .content p {
          width: 100%;
          height: 100%;
        }
        .active-content {
          display: block;
        }
      `}</style>
    </>
  );
}

export default Tabs;

const WrapperNotices = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`