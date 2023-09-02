import React, { useState } from 'react'
import './App.css';
import { ListWithClasses } from './ListWithClasses';


function App() {

  const [visibleList, setVisibleList] = useState(true)

  const toggleVisibleList = () => {
    setVisibleList(visible => !visible)
    // setVisibleList calls callback within itself autamatically 
    // parameter "visible" will be value of visibleList variable
    // in this case we accept current value of visibleList
    // and return a negative value of it
    // then setVisibleList change value of visibleList to returned value

    // of course we can accept just "!visibleList" to setVisibleList instead function
    // but into the big projects it can become cause of specific error
    // if setVisibleList accepts just value without function,
    // setVisibleList can set as 'visibleList' itself previous value
    // and new value vould be ignored  
  }

  return (
    <div className="App">
      <button onClick={toggleVisibleList}>switch</button>
      {visibleList && <ListWithClasses/>}
    </div>
  )
}

export default App;