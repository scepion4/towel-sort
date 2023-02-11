
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result=[]
  if(matrix==0){
    return result;
  }else{
    return matrix.forEach(e=>{
      result=[...e]
    })
  }
}
