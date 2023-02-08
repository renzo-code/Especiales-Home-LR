import React from "react"
import styled from "styled-components"

import SliderAuto from "../components/SliderAutoPlay"
import MultipleItems from "../components/SliderAutoPlay/multipleItems"
import Tabs from "../components/Tabs"
import Layout from "../layout"

const Home = () => {
  return (
    <>
      <Layout>
        {/* <SliderAuto/> */}
        {/* <MultipleItems/> */}
        <Tabs/>
      </Layout>
    </>
  )
}

export default Home
