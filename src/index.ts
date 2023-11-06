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
    