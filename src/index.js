
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result=[]
  if(matrix==0||!matrix){
    return result;
  }else{
    for(let i=0;i<matrix.length;i++){
      if(i%2!==0){
          matrix[i].reverse()
        }
      for(let j=0;j<matrix[i].length;j++){
        if(i==0){
          result.push(matrix[i][j])
        }else{
          
          result.push(matrix[i][j])
        }
      }
    }
  }
  return result
}
