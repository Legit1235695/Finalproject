// import React from "react";
// import { useState } from "react";



// const QuizComp=()=>
// {
//     var QuestionBank=[
//         {
//             Question:"What is the capital of Uganda?",
//             AnswerText:[
//                 {Answer:"Kampala", isCorrect:true},
//                 {Answer:"Paris", isCorrect:false},
//                 {Answer:"London", isCorrect:false},
//                 {Answer:"Skupi", isCorrect:false},
//             ]
//         },
//         {
//             Question:"Who is the Greates Footballer of all time?",
//             AnswerText:[
//                 {Answer:"Ronaldo", isCorrect:false},
//                 {Answer:"Messi", isCorrect:true},
//                 {Answer:"Pele", isCorrect:false},
//                 {Answer:"Maradona", isCorrect:false},
//             ]
//         },
//         {
//             Question:"What is the capital of Mcedonia?",
//             AnswerText:[
//                 {Answer:"Xherma", isCorrect:true},
//                 {Answer:"Shkup", isCorrect:false},
//                 {Answer:"Tetov", isCorrect:false},
//                 {Answer:"Gostivar", isCorrect:false},
//             ]
//         },
//         {
//             Question:"What is the greates basketballer of all time?",
//             AnswerText:[
//                 {Answer:"Labron james", isCorrect:true},
//                 {Answer:"Miceal jordan", isCorrect:false},
//                 {Answer:"Stefencurry", isCorrect:false},
//                 {Answer:"DrenGANGo", isCorrect:false},
//             ]
//         }
//     ]

//     //useState Hook
//     const[currentQuestion,setCurrentQuestion]=useState(0);
//     const[score,setScore]=useState(0);
//     const[showScore,setShowScore]=useState(false);

//     //
//     console.log(QuestionBank);

//     return(
//         <div>
//             {showScore?(
//                 <div>
//                     You have scored {score} out of {QuestionBank.length}
//                 </div>
//             )
//             : (
//                 <>
//                 <div className="question---">
//                     <div className="question-num">

//                     </div>
//                     <div className="question
//                 </div>
//                 </>
//             )
//           }
//         </div>
//     )
// }

// export default QuizComp;