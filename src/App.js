import { useState } from 'react';

import Container from './Components/Container';
import Timer from './Components/Timer';
import InputNumber from './Components/InputNumber';

function App() {
  const [start, setStart] = useState(false);
  const [timerData, setTimerData] = useState({});

  return (
    <Container mainTitle="Timer">
      {start
        ? <Timer data={timerData} currentState={start} active={setStart}/> 
        : <InputNumber data={setTimerData} currentState={start} active={setStart}/>
      }
    </Container>
  );
}

export default App;
