import React, { useState } from 'react';
import './App.css';
import Textinput from './components/Textinput';
import Dropdown from './components/Dropdown';
import OXbtn from './components/OXbtn';
import ResultScreen from './components/ResultScreen';
import dropdownConfig from './config/dropdownConfig.json';

const API_BASE_URL = 'http://localhost:8000';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [calculationResult, setCalculationResult] = useState('');
  const [formData, setFormData] = useState({});

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const getFirstOptionValue = (options) => {
    return options && options.length > 0 ? (options[0].value || options[0]) : '';
  };

  const [select1, setSelect1] = useState(getFirstOptionValue(dropdownConfig.dropdowns[0].options));
  const [select2, setSelect2] = useState(getFirstOptionValue(dropdownConfig.dropdowns[1].options));
  const [select3, setSelect3] = useState(getFirstOptionValue(dropdownConfig.dropdowns[2].options));
  const [select4, setSelect4] = useState(getFirstOptionValue(dropdownConfig.dropdowns[3].options));

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

      const response = await fetch(`${API_BASE_URL}/api/user-activity`, {
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
      
    }
  };

  const handleCalculate = () => {
    const data = {
      targetDate: input1 || new Date().toISOString().split('T')[0].replace(/-/g, '/'),
      currentJewels: parseInt(input2) || 0,
      ticketCount: parseInt(input3) || 0,
      ranking: select4 || '',
      teamLevel: parseInt(select1) || 0,
      championMaterial: parseInt(select2) || 0,
      lohStatus: select3 || '',
      jewelPack: option1,
      tournamentEvent: option2
    };
    
    setFormData(data);
    
    const result = calculateResult(data);
    setCalculationResult(result);
    setShowResult(true);
    
    saveUserActivity();
  };

  const calculateResult = (data) => {
    const result = Math.floor(Math.random() * 100) + 1;
    return `${result}초`;
  };

  const handleRetry = () => {
    setShowResult(false);
    setCalculationResult('');
    setFormData({});
  };

  return (
    <div className="App">
      <main className="main">
        <div className='calculator'>
          {showResult ? (
            <ResultScreen 
              formData={formData}
              result={calculationResult}
              onRetry={handleRetry}
            />
          ) : (
            <>
            <div className='text-inputs'>
              <Textinput 
                label="목표 날짜" 
                value={input1} 
                onChange={setInput1}
                placeholder="YYYY/MM/DD"
              />
              <Textinput 
                label="현재 주얼" 
                value={input2} 
                onChange={setInput2}
              />
              <Textinput 
                label="티켓" 
                value={input3} 
                onChange={setInput3}
              />
            </div>
            <div className='dropdown-inputs'>
              <Dropdown 
                label={dropdownConfig.dropdowns[0].label} 
                value={select1} 
                onChange={setSelect1}
                options={dropdownConfig.dropdowns[0].options}
              />
              <Dropdown 
                label={dropdownConfig.dropdowns[1].label} 
                value={select2} 
                onChange={setSelect2}
                options={dropdownConfig.dropdowns[1].options}
              />
              <Dropdown 
                label={dropdownConfig.dropdowns[2].label} 
                value={select3} 
                onChange={setSelect3}
                options={dropdownConfig.dropdowns[2].options}
              />
              <Dropdown 
                label={dropdownConfig.dropdowns[3].label} 
                value={select4} 
                onChange={setSelect4}
                options={dropdownConfig.dropdowns[3].options}
              />
            </div>
            <div className='ox-inputs'>
              <OXbtn 
                label="데일리 주얼팩" 
                value={option1} 
                onChange={setOption1}
              />
              <OXbtn 
                label="트레이닝 패스" 
                value={option2} 
                onChange={setOption2}
              />
            </div>
            <button className='calculate-btn' onClick={handleCalculate}>
              계산하기
            </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
