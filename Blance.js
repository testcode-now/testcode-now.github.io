import React from "react";
import "./balance.css";

const Balance = ({ handleBalance, balance, betStarted }) => {
  return (
    <div className='balance-section'>
      <div className='bal-input'>
        <label htmlFor='bal'>Balance</label>
        <input
          onChange={handleBalance}
          type='number'
          id='bal'
          name='bal'
          value={balance}
          disabled={betStarted ? true : null}
        />
      </div>
      <button
        onClick={handleBalance}
        className='set-balance-btn'
        disabled={betStarted ? true : null}
      >
        Set Balance
      </button>
    </div>
  );
};

export default Balance;