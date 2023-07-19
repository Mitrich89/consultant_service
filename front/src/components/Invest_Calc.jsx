import React, { useState } from 'react';
import './Invest_Calc.css';

export default function Calculator() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalReturns, setTotalReturns] = useState(0);

  const calculateReturns = () => {
    const totalInvestment = parseFloat(initialInvestment) + parseFloat(monthlyInvestment) * parseFloat(investmentPeriod);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const months = parseFloat(investmentPeriod) * 12;

    let futureValue = 0;
    for (let i = 0; i < months; i++) {
      futureValue = (futureValue + parseFloat(monthlyInvestment)) * (1 + monthlyInterestRate);
    }

    const returns = futureValue - totalInvestment;
    setTotalReturns(returns.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Инвестиционный калькулятор для покупки квартиры</h2>
      <div className="input-group">
        <label>Начальные инвестиции ($)</label>
        <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Ежемесячные инвестиции ($)</label>
        <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Срок инвестирования (лет)</label>
        <input type="number" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Годовая процентная ставка (%)</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <button onClick={calculateReturns}>Рассчитать</button>
      <div className="result">
        <h3>Потенциальная прибыль:</h3>
        <p>${totalReturns}</p>
      </div>
    </div>
  );
}
