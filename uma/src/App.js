import React, { useState } from 'react';
import './App.css';
import Textinput from './components/Textinput';
import Dropdown from './components/Dropdown';
import OXbtn from './components/OXbtn';

const API_BASE_URL = 'http://localhost:8000';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');
  const [select3, setSelect3] = useState('');
  const [select4, setSelect4] = useState('');

  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);

  const saveUserActivity = async () => {
    try {
      const now = new Date().toISOString();

      const userActivityData = {
        target_date: now,
        current_jewels: parseInt(input1) || 0,
        ticket_count: parseInt(input2) || 0,
        ranking: input3 ? parseInt(input3) : null,
        team_level: select1 ? parseInt(select1) : null,
        champion_material: select2 ? parseInt(select2) : null,
        loh_status: select3 || null,
        jewel_pack: option1 !== null ? option1 : false,
        tournament_event: option2 !== null ? option2 : false,
        search_date: now,
        retry_count: 0,
        time_spent_seconds: 0
      };

      const response = await fetch(`${API_BASE_URL}/user-activity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userActivityData),
      });

      if (!response.ok) {
        throw new Error('데이터 저장에 실패했습니다.');
      }

      const result = await response.json();
      alert('데이터가 성공적으로 저장되었습니다!');
      console.log('저장 결과:', result);
    } catch (error) {
      console.error('에러:', error);
      alert('데이터 저장 중 오류가 발생했습니다: ' + error.message);
    }
  };

  const handleCalculate = () => {
    saveUserActivity();
  };

  return (
    <div className="App">
      <main className="main">
        <div className='calculator'>
            <div className='text-inputs'>
              <Textinput 
                label="입력1" 
                value={input1} 
                onChange={setInput1}
              />
              <Textinput 
                label="입력2" 
                value={input2} 
                onChange={setInput2}
              />
              <Textinput 
                label="입력3" 
                value={input3} 
                onChange={setInput3}
              />
            </div>
            <div className='dropdown-inputs'>
              <Dropdown 
                label="선택1" 
                value={select1} 
                onChange={setSelect1}
              />
              <Dropdown 
                label="선택2" 
                value={select2} 
                onChange={setSelect2}
              />
              <Dropdown 
                label="선택3" 
                value={select3} 
                onChange={setSelect3}
              />
              <Dropdown 
                label="선택4" 
                value={select4} 
                onChange={setSelect4}
              />
            </div>
            <div className='ox-inputs'>
              <OXbtn 
                label="옵션1" 
                value={option1} 
                onChange={setOption1}
              />
              <OXbtn 
                label="옵션2" 
                value={option2} 
                onChange={setOption2}
              />
            </div>
            <button className='calculate-btn' onClick={handleCalculate}>
              계산하기
            </button>
        </div>
      </main>
    </div>
  );
}

export default App;
