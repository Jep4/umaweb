import React from 'react';
import './ResultScreen.css';

function ResultScreen({ formData, result, onRetry }) {
  const formatNumber = (num) => {
    if (!num && num !== 0) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getOptionText = (value) => {
    return value === true ? 'O' : value === false ? 'X' : '';
  };

  return (
    <div className="result-screen">
      <div className="result-data-grid">
        <div className="result-column">
          <div className="result-field">
            <label>기준 날짜</label>
            <div className="result-value">{formData.targetDate || ''}</div>
          </div>
          <div className="result-field">
            <label>티켓</label>
            <div className="result-value">{formatNumber(formData.ticketCount)}</div>
          </div>
          <div className="result-field">
            <label>팀레</label>
            <div className="result-value">{formatNumber(formData.teamLevel)}</div>
          </div>
          <div className="result-field">
            <label>챔미</label>
            <div className="result-value">{formatNumber(formData.championMaterial)}</div>
          </div>
          <div className="result-field">
            <label>리그오브 히어로스</label>
            <div className="result-value">{formData.lohStatus || ''}</div>
          </div>
        </div>
        <div className="result-column">
          <div className="result-field">
            <label>현재 주얼</label>
            <div className="result-value">{formatNumber(formData.currentJewels)}</div>
          </div>
          <div className="result-field">
            <label>서클 랭킹</label>
            <div className="result-value">{formData.ranking || ''}</div>
          </div>
          <div className="result-field">
            <label>데일리 쥬얼팩</label>
            <div className="result-value">{getOptionText(formData.jewelPack)}</div>
          </div>
          <div className="result-field">
            <label>트페스</label>
            <div className="result-value">{getOptionText(formData.tournamentEvent)}</div>
          </div>
        </div>
      </div>
      <div className="result-divider"></div>
      <div className="result-section">
        <div className="result-label">계산 결과</div>
        <div className="result-main">{result}</div>
      </div>
      <button className="retry-btn" onClick={onRetry}>
        다시하기
      </button>
    </div>
  );
}

export default ResultScreen;

