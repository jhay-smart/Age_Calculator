import React, { useState } from "react";
import "./ageComponent.css";

function AgeCalculator() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [age, setAge] = useState("");

  const calculateAge = (e) => {
    e.preventDefault();
    if (day === 0 || month === 0 || year === 0) {
      alert("Please enter your birthdate");
    } else {
      const calculatedAge = calculateAgeBasedOnInput(day, month, year);

      setAge(calculatedAge);
    }
  };

  const calculateAgeBasedOnInput = (day, month, year) => {
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0) {
      years--;
      months += 12;
    }
    if (days < 0) {
      months--;
      days += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }

    return ` Your age is ${years} years ${months} months ${days} days`;
  };

  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div className="header">
            <h1 className="title">Age Calculator</h1>
            <hr />
          </div>
          <form className="sections" onSubmit={(e) => calculateAge(e)}>
            <div className="section-container">
              <div>
                <label htmlFor="day">Date</label>
                <br />
                <input
                  type="number"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="month">Month</label> <br />
                <input
                  type="number"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="year">Year</label>
                <br />
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
            <div className="btn">
              <button>Submit</button>
            </div>
            <p className="age">{age}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default AgeCalculator;
