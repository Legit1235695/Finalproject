import React from "react";
import { useState } from "react";
import './Quizstyle.css';



const QuizComp=()=>
{
    var QuestionBank=[
        {
            Question:"What is the capital of Uganda?",
            AnswerText:[
                {Answer:"Kampala", isCorrect:true},
                {Answer:"Paris", isCorrect:false},
                {Answer:"London", isCorrect:false},
                {Answer:"Skupi", isCorrect:false},
            ]
        },
        {
            Question:"Who is the Greates Footballer of all time?",
            AnswerText:[
                {Answer:"Ronaldo", isCorrect:false},
                {Answer:"Messi", isCorrect:true},
                {Answer:"Pele", isCorrect:false},
                {Answer:"Maradona", isCorrect:false},
            ]
        },
        {
            Question:"What is the capital of Mcedonia?",
            AnswerText:[
                {Answer:"Xherma", isCorrect:true},
                {Answer:"Shkup", isCorrect:false},
                {Answer:"Tetov", isCorrect:false},
                {Answer:"Gostivar", isCorrect:false},
            ]
        },
        {
            Question:"What is the greates basketballer of all time?",
            AnswerText:[
                {Answer:"Labron james", isCorrect:false},
                {Answer:"Miceal jordan", isCorrect:false},
                {Answer:"Stefencurry", isCorrect:false},
                {Answer:"DrenGANGo", isCorrect:true},
            ]
        }
    ]

    //useState Hook
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[score,setScore]=useState(0);
    const[showScore,setShowScore]=useState(false);
    const handleAnswerResponse=(isCorrect)=>
    {
        if(isCorrect)
        {
            setScore(score+1);
        }

        const nextQuestion= currentQuestion+1;
        if(nextQuestion<QuestionBank.length)
        {
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
        }
    }

    //
    console.log(QuestionBank);

    const resetQuiz=()=>
    {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return(
        <div className="test">
            {showScore? (
                <div className="score-section">
                    You have scored {score} out of {QuestionBank.length}
                    <>
                    <button type="submit" onClick={resetQuiz}>Play Again!!!</button>
                    </>
                </div>
            )
            : (
                <>
                <div className="question-select">
                    <div className="question-section">
                        <span>{currentQuestion+1}</span>/{QuestionBank.length}
                    </div>
                    
                    <div className="question-text">
                        {QuestionBank[currentQuestion].Question}
                    </div>
                </div>

                <div className="answer-section">
                    {QuestionBank[currentQuestion].AnswerText.map((AnswerText)=>
                    (
                        <button onClick={()=>handleAnswerResponse(AnswerText.isCorrect)}>{AnswerText.Answer}</button>
                    ))}
                </div>
                </>
            )
          }
        </div>
    )
}

export default QuizComp;