import React, { useState } from 'react'
import styled from 'styled-components'
import code39Mappings from './mappings'
import { nricFactory } from './utils/generators'


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
  height: 30px;
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
  mapToBlocks(code39Mappings['*'])
)

const App = () => {

  const [toConvert, setToConvert] = useState('')

  const handleChange = ({ target: { value } }) => {
    const upperValue = value.toUpperCase();
    const isValidChar = Object.keys(code39Mappings).indexOf(upperValue.substr(-1)) !== -1 || upperValue === '';
    if (isValidChar) setToConvert(upperValue)
  }

  return (
    <MainContainer>
      <Container onClick={() => setToConvert(nricFactory.newNric())}>
        <StartStopSequence />
        {
          toConvert.toUpperCase().split('').map(
            char => {
              return (
                mapToBlocks(code39Mappings[char])
              )
            }
          )
        }
        <StartStopSequence />
      </Container>

      <h3>Enter something to generate:</h3>
      <input
        type="text"
        value={toConvert}
        onChange={handleChange} />


    </MainContainer>
  )
}

export default App