import React from "react";
import "./pyramid.css";
import Ball from "../Ball/Ball";
import { useState, useEffect } from "react";

const Pyramid = ({ rows, nodeArr, tempOldNodeArr, path, betStarted }) => {
  const [rowsWord, setRowsWord] = useState("eight");
  useEffect(() => {
    switch (rows) {
      case 8:
        setRowsWord("eight");
        break;
      case 9:
        setRowsWord("nine");
        break;
      case 10:
        setRowsWord("ten");
        break;
      case 11:
        setRowsWord("eleven");
        break;
      case 12:
        setRowsWord("twelve");
        break;
      case 13:
        setRowsWord("thirteen");
        break;
      case 14:
        setRowsWord("fourteen");
        break;
      case 15:
        setRowsWord("fifteen");
        break;
      case 16:
        setRowsWord("sixteen");
        break;
      default:
        break;
    }
  }, [rows]);

  const circleStyle = {
    borderRadius: "50%",
    backgroundColor: "white",
    minWidth: `${5 / rows}em`,
    minHeight: `${5 / rows}em`,
  };

  const rowStyle = {
    display: "flex",
    gap: `${16 / rows}em`,
    alignItems: "center",
    justifyContent: "center",
  };

  const pyramidStyle = {
    display: "flex",
    flexDirection: "column",
    gap: `${16 / rows}em`,
    position: "relative",
  };

  const multiplierStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${4.6 / rows}em ${0 / rows}em`, // change
    // backgroundColor: "rgb(219, 59, 31)", // change?
    width: `${
      rows === 8 || rows === 9
        ? 29 / rows
        : rows === 10 || rows === 11
        ? 28 / rows
        : rows === 12 || rows === 13
        ? 27 / rows
        : rows === 14
        ? 26 / rows
        : 25 / rows
    }em`, // change
    margin: "0 0.2em",
    borderRadius: "0.22em",
    color: "white",
    fontSize: "0.624em",
    borderBottom: "0.3em solid rgba(0, 0, 0, 0.233)",
    backgroundImage:
      "linear-gradient(to right, red, red, rgb(204, 155, 21),red, red)",
    backgroundAttachment: "fixed",
    fontWeight: 600,
  };

  let ballTopStyle;

  if (rows === 8) {
    ballTopStyle = { top: `-4.6em` };
  } else if (rows === 9) {
    ballTopStyle = { top: `-4.8em` };
  } else if (rows === 10) {
    ballTopStyle = { top: `-4.2em` };
  } else if (rows === 11) {
    ballTopStyle = { top: `-3.7em` };
  } else if (rows === 12) {
    ballTopStyle = { top: `-3.4em` };
  } else if (rows === 13) {
    ballTopStyle = { top: `-3.1em` };
  } else if (rows === 14) {
    ballTopStyle = { top: `-2.8em` };
  } else if (rows === 15) {
    ballTopStyle = { top: `-2.5em` };
  } else if (rows === 16) {
    ballTopStyle = { top: `-2.2em` };
  }

  // console.log(rowsWord);

  return (
    <div style={pyramidStyle} className='pyramid hidden-overflow'>
      <div
        style={ballTopStyle}
        className={`ball-div falling-ball ballTopStyle ${rowsWord}`}
      >
        <Ball path={ path} rows={rows} betStarted={betStarted} />
      </div>
      {nodeArr.map((rowArr, i) => {
        if (i > 1) {
          return (
            <div key={i} style={rowStyle}>
              {rowArr.map((node, j) => {
                return <div key={j} style={circleStyle}></div>;
              })}
            </div>
          );
        }
      })}
      <div className='multipliers-row'>
        {tempOldNodeArr.map((node, i) => {
          return (
            <div key={i} style={multiplierStyle}>
              {node.data}
              {/* {node.data.toString().length < 3 ? "×" : ""} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pyramid;