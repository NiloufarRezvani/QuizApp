import React, { useEffect, useState } from "react";

function QuizTimer({difficulty,questionCount,onTimer}) {

  const limitedTime = () => {
    const limitTime = {
      easy: 2 * 60 + 15,
      medium: 3 * 60,
      hard: 4 * 60 + 45,
    };
    const timeperQuestion=20;//time per question
    const baseTime = limitTime[difficulty]|| difficulty.easy;
    if(questionCount>10){
      const extraTime = (questionCount-10)*timeperQuestion  
      return baseTime +extraTime  
    }
    return baseTime
    
  };
  const [leftTime,setLeftTime]=useState(limitedTime())
  useEffect(()=>{
    if(leftTime===0){
      onTimer()
    }
    const timer = setTimeout(()=>{setLeftTime(leftTime-1)},1000)
    return ()=>clearTimeout(timer)
  },[leftTime]);

  const formatTime =(secends)=>{
    const mins =Math.floor(secends/60)
    const sec =secends %60;
    return`${mins}:${sec<10 ?'0':''}${sec}`}
  
  return (
<div className="font-semibold text-black text-xl">
  <p>Time Left:
    <span>{formatTime(leftTime)}</span>
  </p>
</div>
  ) 
  
}

export default QuizTimer;
