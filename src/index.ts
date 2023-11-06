
export function allGuter(): number {
    const array = new Array(20).fill(0);
    console.log(array);

    let score =0
    for(let i = 0; i < array.length; i++){
        score = score + array[i];
        
      }

      return score;
 

     //const score = array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6]+array[7]+array[8]+array[9]+array[10]+array[11]+array[12]+array[13]+array[14]+array[15]+array[16]+array[17]+array[18]+array[19];
    //return score;
    
  
}
export function singleKnock(): number {

  const array = new Array(20).fill(1);
  console.log(array);
    console.log(array);
    let score1 =0
    for(let i = 0; i < array.length; i++){
        score1 = score1 + array[i];
        
      }

      return score1;

}