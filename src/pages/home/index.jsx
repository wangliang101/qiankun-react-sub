import React, {useState, useEffect} from 'react';

  const Home = ({onGlobalStateChange, setGlobalState}) => {

  const [text, setText] = useState('');

  const changeGlobalData = () => {
    setGlobalState({
      value: 'react-sub change data'
    }) 
  }

  useEffect(() => {
    onGlobalStateChange((state, pre) => {
      setText(state)
    })
  }, [])

  return(
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>react-sub home</div>
      <div>主应用数据:{text.value}</div>
      <div onClick={changeGlobalData}><button>修改主应用数据</button></div>
    </div>
  )
}

export default Home;