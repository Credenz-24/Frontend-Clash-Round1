import { useState } from "react";
import TopCards from "../props/TopCards";
const Senior = ({leadSenior}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(7)

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = leadSenior.slice(
      indexOfFirstEntry,
      indexOfLastEntry
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return ( 
        <>
         <style>
                {`
                    @media only screen and (max-width: 468px) {
                        .Team {
                            width: 100%;
                            height: 100vh;
                            padding: 0 2vw;
                        }
                        .top-3-seniors {
                            width: 100%;
                            height: 50%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            padding: 0 2vw;
                            display:none;
                        }
                        .senior-table {
                            width: 100%;
                            max-height: calc(100vh - 50%);
                        }
                        .ranking{
                            display:flex;
                            height:50px;
                            width:100%;
                            border: 2px solid #3b83f6;
                            border-radius:5px;
                            color:white;
                            
                        }
                    }
                    @media only screen and (min-width: 600px) {
                        .ranking{
                            display:none;
                        }
                        .top-3-seniors{
                            display:flex;
                            flex-direction:column;
                        }    
                    }

                    
                `}
            </style>
            <div className="Team h-[90%] w-full flex  flex-col justify-center items-center ">
                <div className="top-3-juniors mb-2 md:flex-row flex-col md:h-[20%] h-[max-content] md:w-full w-[90%] bg-purple-40 flex justify-center items-center gap-[6vw] ">
                {
                    leadSenior.filter((items, index) => (index < 3))
                        .map((item) => (
                            <TopCards key={item.teammate_one} name={item.teammate_one} teamScore={item.team_score}  />
                        ))
                }
                </div>
                {/* <div className="current-rank h-[10%] w-full bg-green-0 flex justify-center items-center">
                    <div className="box h-full w-[700px] bg-[#09112c] border-blue-500 border-2 border-solid rounded-[5px] flex justify-between items-center px-[4vw] ">
                        <h1 className='text-white text-[30px]'>Your rank</h1>
                        <h1 className='text-white text-[30px]'>{per.team_rank}</h1>
                    </div>
                </div> */}
                <div className="juniors-table h-[70%] w-full flex justify-center items-center bg-green-40 ">
                    <div className=" junior h-[300px] w-[700px] mx-auto bg-red-80 shadow-md rounded-lg overflow-y-scroll no-scrollbar border-[2px] border-solid border-blue-500">
                    <h2 className="text-2xl sticky top-0 font-bold text-center text-white bg-[#09112c] p-4 border-b-[2px] border-solid border-blue-500">Senior Leaderboard</h2>
                    <ul className="divide-y divide-blue-900">
                        {currentEntries.map((entry, index) => (
                            <li key={index} className="flex justify-between items-center h-[78px] w-[100%] p-4 hover:bg-[#0b143e] hover:text-zinc-800">
                                <span className="font-semibold text-blue-400">{(currentPage - 1)*entriesPerPage + index + 1}</span>
                                <span className="text-white font-medium">{entry.teammate_one}</span>
                                {/* Adjust according to your data structure */}
                                <span className="text-gray-200">{entry.team_score} pts</span>
                                <span className="text-sm text-gray-300">{entry.correct_questions} Ques</span>
                            </li>
                        ))}

            <div className="ml-10 flex justify-center mt-4">
                    {Array.from(
                        { length: Math.ceil(leadSenior.length / entriesPerPage) },
                        (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-3 py-1 rounded-lg ${
                            i + 1 === currentPage
                                ? "bg-slate-950 text-white hover:bg-slate-950 hover:shadow-md"
                                : "bg-slate-900 text-white hover:bg-slate-950 hover:shadow-md"
                            }`}
                        >
                            {i + 1}
                        </button>
                        )
                    )}
                    </div>
                    </ul>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Senior;