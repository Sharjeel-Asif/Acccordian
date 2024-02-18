import { useState } from "react";
import Accordian from "./comp/Accordian/Accordian";
import data from "./comp/Accordian/Data";
import "./App.css";

function App() {
  const [seleccted, setseleccted] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);
  const handleSingle = (dataItemId) => {
    console.log(dataItemId);
    setseleccted(dataItemId === seleccted ? null : dataItemId);
  };
  const handleMultiple = (getdataItemId) => {
    const copyElem = [...multiple];
    const copyElemFindIndexID = copyElem.indexOf(getdataItemId);

    if (copyElemFindIndexID === -1) {
      copyElem.push(getdataItemId);
    } else {
      copyElem.splice(copyElemFindIndexID, 1);
    }
    setmultiple(copyElem);
  };

  return (
    <>
      <Accordian />

      <button
        className="btn btn-info d-block mx-auto text-white mt-3"
        onClick={() => setMultiSelection(!multiSelection)}
      >
        {multiSelection ? "Single Selection" : "Multiple Selection"}
      </button>

      {data.map((dataItem) => (
        <div key={dataItem.id} style={{ marginBottom: "10px" }}>
          <div className="flex text-center">
            <h4
              onClick={
                multiSelection
                  ? () => handleMultiple(dataItem.id)
                  : () => handleSingle(dataItem.id)
              }
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
                marginRight: "10px",
                padding: "5px",
                display: "inline-block",
              }}
            >
              {dataItem.question}
            </h4>
            <span>+</span>
          </div>
          {multiSelection ? (
            multiple.indexOf(dataItem.id) !== -1 && (
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginTop: "5px",
                }}
              >
                {dataItem.answer}
              </div>
            )
          ) : seleccted === dataItem.id ? (
            <div
              style={{
                backgroundColor: "#f0f0f0",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              {dataItem.answer}
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default App;
