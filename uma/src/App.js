import './App.css';
import Textinput from './components/Textinput';
import Dropdown from './components/Dropdown';
import OXbtn from './components/OXbtn';

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className='calculator'>
            <div className='text-inputs'>
              <Textinput label="입력1"></Textinput>
              <Textinput label="입력2"></Textinput>
              <Textinput label="입력3"></Textinput>
            </div>
            <div className='dropdown-inputs'>
              <Dropdown label="선택1"></Dropdown>
              <Dropdown label="선택2"></Dropdown>
              <Dropdown label="선택3"></Dropdown>
              <Dropdown label="선택4"></Dropdown>
            </div>
            <div className='ox-inputs'>
              <OXbtn label="옵션1"></OXbtn>
              <OXbtn label="옵션2"></OXbtn>
            </div>
            <button className='calculate-btn'>
              계산하기
            </button>
        </div>
      </main>
    </div>
  );
}

export default App;
