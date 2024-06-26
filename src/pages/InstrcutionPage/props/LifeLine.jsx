import { useState } from "react";
import Popup from "./Popup";
import InstructionMain from "../InstructionMain";


const LifeLine = (props) => {
    const title = props.title;
    const image = props.img;
    const handlepops = props.popup;
    const ID = props.id;
    const display = props.dis;

    const LifelineArray=[
        {
            id:1,
            title:"STREAK",
            img:"../fire.png",
            content:"a"
        },
        {
            id:2,
            title:"AI HELPER",
            img:"../technology.png",
            content:"b"
        },
        {
            id:3,
            title:"POLL",
            img:"../polling.png",
            content:"The Audience Poll lifeline allows players to seek assistance from the collective wisdom of the audience. Upon activation, players receive a graphical representation showcasing the distribution of answers from the audience. It gives the most probable response among the options presented"
        },
        {
            id:4,
            title:"SKIP",
            img:"../right-arrow.png",
            content:"The Skip Lifeline grants the player the option to bypass the current question without providing an answer. This lifeline is particularly useful when uncertain about the correct response or desiring to progress swiftly through the game. Upon activation, the current question will be substituted with a new one"
        },
    ];

    const[text,setText]=useState([]);

    let Display = (text) => { 
        const newDisplay = LifelineArray.filter(items => items.id === text);
        console.log(newDisplay);
        setText(newDisplay);
      }

    

    
    return ( 
        <>

<style>
            {`
                 @media only screen and (max-width: 468px) {
                    .cards{
                        display:none;
                    }
                    .cards2{
                        width:100%;
                        height:130px;
                        overflow-x:hidden;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        // padding: 2vw 2vw;
                        // gap:10px;
                    }
                    .image{
                        height:100%;
                        width:30%;
                    }
                    .icons{
                        height:60px;
                        width:60px;
                    }
                    .titlemain{
                        height:100%;
                        width:70%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .btn{
                        height:100%;
                        width:20%;
                    }
                    .button{
                        height:100%;
                        border-radius:0px;
                    }
   
                } 
                @media only screen and (min-width: 500px) {
                    .cards2{
                        display:none;
                    }
                }

            `}
        </style>
            
            <div className="cards h-[300px] w-[250px] bg-[#0b143e] rounded-[10px] backdrop-blur-[50px] border-[2px] border-solid border-blue-500 ">

                <div className="image h-[60%] w-full bg-[#09112c] bg-purple-40 flex justify-center items-center rounded-[10px]">
                    <img src={image} alt=""  className="icons h-[120px] w-[120px]"/>
                </div>

                <div className="titlemain text-white text-[30px] font-bold h-[18%] w-full bg-yellow-30 flex justify-center items-center">{title}</div>

                <div className="btn h-[22%] w-full flex justify-center items-center">
                    <button className="button text-white  px-[20px] py-[10px] bg-blue-500 rounded-full hover:bg-blue-800"
                    onClick={() => {
                        handlepops();
                        Display(ID);
                        display(ID);
                    }}
                    >Know more</button>
                </div>
  
            </div>

            <div className="cards2 h-[300px] w-[250px] bg-[#0b143e] rounded-[10px] backdrop-blur-[50px] border-[2px] border-solid border-blue-500 "onClick={() => {
                        handlepops();
                        Display(ID);
                        display(ID);
                    }}>

                <div className="image h-[60%] w-full bg-[#09112c] bg-purple-40 flex justify-center items-center rounded-[10px]">
                    <img src={image} alt=""  className="icons h-[120px] w-[120px]"/>
                </div>

                <div className="titlemain text-white text-[30px] font-bold h-[18%] w-full bg-yellow-30 flex justify-center items-center">{title}</div>

                {/* <div className="btn h-[22%] w-full flex justify-center items-center">
                    <button className="button text-white  px-[20px] py-[10px] bg-blue-500 rounded-full hover:bg-blue-800"
                    onClick={() => {
                        handlepops();
                        Display(ID);
                        display(ID);
                    }}
                    >Know more</button>
                </div> */}
  
            </div>
            
        </>
     );
}
 
export default LifeLine;