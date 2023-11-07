//Bowling Kata
// test cases :
// all zero score
// all one score
// full score
// spare score
// strike score
// all spare score
// all strike score
// all spare score with bonus

import exp from "constants";


export function allGuter() : number {
  let score = 0;
 //const rolls = [0,0,0,0,0,0,0,0,0,0];
 const frames = Array(10).fill(0);
  for (let i = 0; i < frames.length; i++) {
    score += frames[i];
  }
  
  return score;

  }
  

  export function allSingleScore() : number {
    let score = 0;
   //const rolls = [0,0,0,0,0,0,0,0,0,0];
   const rolls = Array(20).fill(1);
    for (let i = 0; i < rolls.length; i++) {
      score += rolls[i];
    }
    
    return score;
  
    }
    
    export function allSpareScore() : number {  
      let score = 0;
      const rolls = Array(21).fill(5);
      for (let i = 0; i < rolls.length; i++) {
        score += rolls[i];
      }
      console.log(score);
      return score;
    
      }
      export function allStrikeScore() : number {  
        let score = 0;
        const rolls = Array(12).fill(10);
        for (let i = 0; i < rolls.length; i++) {
          score += rolls[i];
        }
        console.log(score);
        return score;
      
        }
        export function rollsScore() : Array<number> {  
          const rolls =[
            0,0, //frame 1
            0,0, //frame 2
            0,0,// frame 3
            0,0, //frame 4
            0,0,  //frame 5
            0,0,  //frame 6  
            0,0, //frame 7
            0,0, //frame 8
            0,0, //frame 9   
            3,7,8 //frame 10
          ]
          return rolls;
          }
          
        export function calcScore(rollsScore:Array<number>) : any {  
          let score = 0;
          for (let frame = 0; frame < 10 ; frame++) {
            const frameIndex = frame * 2;
            const firstRoll = rollsScore[frameIndex];
            const secondRoll = rollsScore[frameIndex + 1];
            score += firstRoll + secondRoll;
            if(firstRoll + secondRoll === 10){
              score += rollsScore[frameIndex + 2];
            }
          }
          console.log(score);
          return score;
        
          }