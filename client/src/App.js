import React, { useState } from 'react'
import styled from 'styled-components'


const Slim = styled.div`
  width: 1px;
  height: 30px;
  background-color: black;
  margin-right: 1px;
`

const Fat = styled.div`
  width: 3px;
  height: 30px;
  background-color: black;
  margin-right: 1px;
`

const Blank = styled.div`
  width: 2px;
  height: 100px;
  background-color: white;
`


const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`


const mapping = {
  0: Slim,
  1: Fat,
  2: Blank
}

const mapToBlocks = (sequence) => {
  /**
   * 0: slim block
   * 1: fat block
   * 2: blank
   * @params sequence: Array
   */
  return sequence.map((i, idx) => React.createElement(mapping[i], { key: idx }))
}


const StartStopSequence = () => (
  <React.Fragment>
    <Slim />
    <Blank />
    <Slim />
    <Fat />
    <Fat />
    <Slim />
  </React.Fragment>
)

const App = () => {

  // 123456 seq
  const seq = [
    [1, 0, 2, 0, 0, 1],
    [0, 1, 2, 0, 0, 1],
    [1, 1, 2, 0, 0, 0],
    [0, 0, 2, 1, 0, 1],
    [1, 0, 2, 1, 0, 0],
    [0, 1, 2, 1, 0, 0],
  ]

  // S1234567D
  const nricSeq = [
    [0, 1, 0, 1, 2, 0],
    [1, 0, 2, 0, 0, 1],
    [0, 1, 2, 0, 0, 1],
    [1, 1, 2, 0, 0, 0],
    [0, 0, 2, 1, 0, 1],
    [1, 0, 2, 1, 0, 0],
    [0, 1, 2, 1, 0, 0],
    [0, 0, 2, 0, 1, 1],
    [0, 0, 1, 2, 0, 1],
  ]

  const [sequence, setSequence] = useState(seq)

  return (
    <MainContainer>
      <Container>
        <StartStopSequence />
        {
          nricSeq.map(
            s => (
              mapToBlocks(s)
            )
          )
        }
        <StartStopSequence />
      </Container>
    </MainContainer>
  )
}

export default App