import React from 'react'
const inputStyle = {
  height: "30px",
  width: " 80px",
  border: "none",
  borderBottom:" 1px solid lightgray"
}
function Question1() {
  return (
    <main>
      <div style={{ border: "1px solid black", padding: "10%", width: "50vw", backgroundColor: "#e3e3e3" }}>
        <h2>Question 1</h2>
        <div style={{ padding: "5%" }}>
          Add the correct data type for the following variables:
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}><input style={inputStyle} /> <p>{"myNum = 5;"}</p></div>
            <div style={{ display: "flex" }}><input style={inputStyle} /><p>myFloatNum = 5.99;</p></div>
            <div style={{ display: "flex" }}><input style={inputStyle} /> <p>myLetter = 'D';</p></div>
            <div style={{ display: "flex" }}><p>int</p><input style={inputStyle} /> <p>{"() {"}</p></div>

          </div>
        </div>
      </div>
    </main>
  )
}


export default Question1