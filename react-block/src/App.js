import React, {useState} from 'react';
import {Form, Box, BoxContainer} from './components'

function App () {
  const [data, setData] = useState(['join', 'concat', 'boroda'])
  const [inputValue, setInputValue] = useState('')
  console.log(data)
  
  const onSubmit = () => {
    
    setData(newData => [...data, inputValue])
    
  }

  const dataFilter = data.filter(text => text.includes(inputValue))

  const emptyData = dataFilter == inputValue
  
  return (
    <div>
      <Form emptyData={emptyData} inputValue={inputValue} onSubmit={onSubmit} onChange={setInputValue}></Form>
      <BoxContainer>
        {dataFilter.map(text => <Box xtextx={text} />)}
      </BoxContainer>
    </div>
  )
  
}

export default App;
