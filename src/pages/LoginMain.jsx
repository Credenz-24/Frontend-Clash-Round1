// import React, { useState, useEffect } from "react";
// import axios from 'axios'; 
// import { Link } from "react-router-dom";
// import { axiosNoAuthInstance,contestId } from "../axios/axios";
// // import{axiosNoAuthInstance, contestId} from "../../../../new-clashrc/src/axios/axios.js"

// const Login = () => {

//   const [showLabelUser, setShowLabelUser] = useState(false);
//   const [showLabelPass, setShowLabelPass] = useState(false);
//   const handleInputFocus1 = () => {
//     //setShowUnderline(true); // Show the underline when input is focused
//     setShowLabelUser(true);
//     // document.getElementById("userInput").classList.add("animated-placeholder");
//     // document.getElementById("userUnderline").classList.add("active");
//   };

//   const handleInputFocus2 = () => {
//    // setShowUnderline(true); // Show the underline when input is focused
//     setShowLabelPass(true);
//     // document.getElementById("passInput").classList.add("animated-placeholder");
//     // document.getElementById("passUnderline").classList.add("active");
//   };

//   const handleInputBlur1 = () => {
//     //setShowUnderline(false); // Hide the underline when input loses focus
//     // Hide the label when input loses focus and its value is empty
//     if (userId === "") {
//       setShowLabelUser(false);
//     }
//   //   document.getElementById("userInput").classList.remove("animated-placeholder");
//   //   document.getElementById("userUnderline").classList.remove("active");
//   };

//   const handleInputBlur2 = () => {
//     // setShowUnderline(false); // Hide the underline when input loses focus
//     // Hide the label when input loses focus and its value is empty
//     if (password === "") {
//       setShowLabelPass(false);
//     }
//     // document.getElementById("passInput").classList.remove("animated-placeholder");
//     // document.getElementById("passUnderline").classList.remove("active");
//   };

//   // const createRipple = (event) => {
//   //   if (window.innerWidth > 468) {

//   //   const rippleContainer = event.currentTarget;
//   //   const rect = rippleContainer.getBoundingClientRect();
//   //   const ripple = document.createElement("span");
//   //   const size = Math.max(rect.width, rect.height) * 0.1; // Adjust the factor as needed
//   //   const x = event.clientX - rect.left - size / 2;
//   //   const y = event.clientY - rect.top - size / 2;

//   //   ripple.style.width = ripple.style.height = `${size}px`;
//   //   ripple.style.left = `${x}px`;
//   //   ripple.style.top = `${y}px`;
//   //   ripple.className = "ripple";

//   //   // Set z-index based on screen width
//   //   // ripple.style.zIndex = window.innerWidth <= 640 ? "-1" : "auto";

//   //   rippleContainer.style.position = "relative";
//   //   rippleContainer.style.overflow = "hidden";

//   //   rippleContainer.appendChild(ripple);

//   //   setTimeout(() => {
//   //     ripple.remove();
//   //   }, 2000); // Duration should match the CSS animation
//   // }
//   // };

//   const [loginType, setLoginType] = useState("individual"); // 'individual' or 'team'
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLoginTypeChange = (event) => {
//     setLoginType(event.target.value);
//     console.log(event.target.value)
//   };

//   // const handleLogin = (event) => {
//   //   event.preventDefault();
//   //   console.log({userId, password});
  
//   //   const loginData = {
//   //     teamname: userId,
//   //     password: password,
//   //   };

//   //   axios.post('http://localhost:8000/api/login', loginData)
//   //   .then(
//   //     (res) => console.log(res)

//   //     document.cookie = `jwt=${res.data.jwt}`;
//   //   )
//   //   .catch((err) => console.log(err.response.data.detail))

//   // };
  
//   const handleLogin = (event) => {
//     event.preventDefault();
//     console.log({ userId, password });
  
//     const loginData = {
//       username: userId,
//       password: password,
//       contestId:contestId
//     };
  
//     axiosNoAuthInstance.post('/player/login/',loginData )
//       .then((res) => {
//         console.log(res);
//         localStorage.setItem('TOKEN',res.data.token);
//         localStorage.setItem('isJunior',res.data.isJunior);
//         // Assuming the token is in res.data.token
//         // Set a cookie that expires in 1 hour
//         // Redirect or update UI as necessary
//       })
//       .catch((err) => console.log(err.response ? err.response.data.detail : err.message));
//   };
  


//   return (
    
//     <>
//     <div
//     // className="h-screen items-center flex md:flex-row sm:flex-col text-center flex-col bg-black"
//     className="h-[100vh] w-full flex md:flex-row sm:flex-col justify-center items-center flex-col bg-transparent "
//     style={{backgroundImage: `url('../Background 1.jpeg')`, backgroundSize: 'cover'}}    
//     // onClick={createRipple}
//     >
//       {/* <video
//         autoPlay
//         loop
//         muted
//         className="h-full w-full object-cover fixed top-0 left-0 z-[-1]"
//       >
//         <source src="../wave3.mp4" type="video/mp4" />
//       </video> */}
      
//       <div className="image h-full w-[50%] bg-blue-40 flex flex-col  justify-center items-center">
        
//         <img src="../Credenz_logo.png" alt=""  className="h-[60px] w-[60px] absolute top-[4%] left-[3%]" />
//         <h1 className="text-[30px] text-white font-bold absolute top-[30%]">Credenz Present's</h1>
//         <img src="../clash.png" alt=""  className="h-[400px] w-[400px]" />


        
//       </div>
//       <div className="md:w-[50%] h-screen bg-red-40 flex justify-center items-center sm:ml-12 md:ml-12 lg:ml-0">
      
//       {/* <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"> */}
 
      
    

//       <div className="mt-0 sm:mt-6 bg-red-40 md:mt-5 lg:mt-5 xl:mt-0 2xl:mt-0 md:w-[60%] sm:bottom-10 sm:flex sm:place-items-center sm:items-center justify-center sm:ml-12 md:ml-12 lg:ml-0 bg-re-200 ">
//         {/* <EvervaultCard text="hover" handleLogin = {handleLogin}/> */}
        
//         <form
//           onSubmit={handleLogin}
//           // className="mt-0 flex z-10 md:absolute sm:absolute md:w-[370px] sm:w-[340px] md:h-3/4 flex-col p-8 bg-opacity-60 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl border border-gray-100 gradient-shadow"
//           className=" h-[500px] w-full  xl:mb- sm:mt-6 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-0 flex z-10 md:w-[370px] sm:w-[340px] flex-col justify-center items-center p-[0px] bg-opacity-0 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-[10px] border border-zinc-600 gradient-shadow"
//         >
//         <div className="h-[100%] w-full px-[px] flex flex-col justify-center items-center gap-[20px] ">
//           <h1 className="text-white justify-center text-center items-center text-[40px] font-semibold">
//             Login
//           </h1>
//           <div className="flex flex-col ">
//           {showLabelUser && ( // CondiUsertionally render the label
//               <label className="text-xs  text-white">
//                 {loginType === "individual" ? "Username" : "Team ID"}
//               </label>
//           )}
//             {/* <label className="absolute mt-2 text-white">{loginType === "individual" ? "Username" : "Team ID"}</label> */}
//             <input
//               id="username"
//               className="flex border border-1 border-zinc-200 pl-2 items-center bg-transparent text-gray-200 rounded-[5px] py-2 outline-none focus:border-white w-[250px]"
//               type="email"
//               placeholder={showLabelUser ? "" : loginType === "individual" ? "Username" : "Team ID"}
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               onFocus={handleInputFocus1}
//               onBlur={handleInputBlur1}
              
//             />
//             </div>
//             <div className="flex flex-col ">
//             {showLabelPass && ( // CondiUsertionally render the label
//               // <label className="text-xs transition-[translate-y-[px]] duration-[1000] text-white">Password</label>
//               <label className="text-xs text-white">Password</label>

//             )}
//               {/* <label className="absolute mt-2 text-white">Password</label> */}
//               <input
//                 id="password"
//                 className="rounded w-[250px] pl-2 border border-1 py-2 bg-transparent text-gray-200 outline-none"
//                 type="password"
//                 placeholder={showLabelPass ? "" : "Password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onFocus={handleInputFocus2}
//                 onBlur={handleInputBlur2}
//               />
//             </div>
//             <div role="radiogroup" className=" RadioButtons bg-red-400 w-full h-[40px] flex justify-center items-center gap-[40px]">
//               <div className="flex items-center">
//                 <div className="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
//                   <input
//                     value="individual"
//                     checked={loginType === "individual"}
//                     onChange={handleLoginTypeChange}
//                     aria-labelledby="label2"
//                     type="radio"
//                     name="radio"
//                     className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-collapse"
//                   />
//                   <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
//                 </div>
//                 <label
//                   id="label2"
//                   className="text-2xl ml-2 leading-4 font-normal text-gray-800 dark:text-gray-100"
//                 >
//                   Junior
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <div className="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
//                   <input
//                     value="team"
//                     checked={loginType === "team"}
//                     onChange={handleLoginTypeChange}
//                     aria-labelledby="label1"
//                     type="radio"
//                     name="radio"
//                     className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
//                   />
//                   <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
//                 </div>
//                 <label
//                   id="label1"
//                   className="ml-2 text-2xl leading-4 font-normal text-gray-800 dark:text-gray-100"
//                 >
//                   Senior
//                 </label>
//               </div>
//             </div>
//             <div className=" h-[15%] w-full flex justify-center items-center">            
//               {/* <button
                
//                 onClick={handleLogin}
//                 type="button"
//                 // className="lg:mt-6 xl:mt-0 over:animate-pulse text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7 py-3.5 dark:bg-blue-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                 className="lg:mt-6 wavy-btn xl:mt-0 text-white font-medium rounded-lg text-xl px-7 py-3.5 dark:bg-blue-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

//               >
//                 Login
//               </button> */}
//               <Link to= {'/questionhub'} className="lg:mt-6 xl:mt-0 over:animate-pulse text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-center rounded-lg text-xl px-[30px] py-[10px] dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800">Login</Link>
//             </div>
//           </div>

//           {/* <div className="flex justify-center xl:pt-12  pt-0"> */}
          
//         </form>
//       </div>
//       </div>
//     </div>
//     </>
    
    
//   );
// };

// export default Login;




