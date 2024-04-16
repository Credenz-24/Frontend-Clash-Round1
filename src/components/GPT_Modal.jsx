import React from "react";

export default function GPT_Modal({
  lifelineIns,
  type,
  onClose,
  onConfirm,
  inputValue,
  onChange,
  response,
}) {
  const isCode = (text) => {
    return text.includes("{") && text.includes("}");
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none">
            <div className="flex items-center justify-between pt-6 pl-6 pr-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded text-xl border-[2.3px]"
                type="button"
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div
              className="text-white relative p-6 flex-auto h-[49vh] w-[20vw] max-h-[50vh] border-2 border-white m-6 resize-none overflow-y-scroll bg-slate-800"
              style={{
                scrollbarColor: "gray black",
                WebkitScrollbar: {
                  width: "10px",
                  backgroundColor: "black",
                },
                scrollbarWidth: "thin",
              }}
            >
              <textarea
                className="text-white bg-slate-800 border-white border-2 p-2 mr-2 w-full resize-none"
                placeholder="Enter your input"
                value={inputValue}
                onChange={onChange}
                rows={5} 
              />
              
              <div
                className={`text-white ${
                  isCode(response) ? "pl-4" : "" 
                }`}
              >
                <p>Answer to your question:</p>{response}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="text-white border-white p-2 mr-2"
                onClick={onConfirm}
              >
                Find Answer!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}