const time=(time)=>{

  let curr_time="";
  for(let i=0;i<10;i++){
    curr_time+=time[i];
  }
  
  curr_time+=" | ";
  
  for(let i=11;i<16;i++){
    curr_time+=time[i];
  }
  
  return curr_time;
}
export default time;