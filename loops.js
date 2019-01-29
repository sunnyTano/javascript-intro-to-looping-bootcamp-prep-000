function forLoop(arr){
  for(var i = 0; i<25; i++){
    if(i === 1){
      arr.push(`I am ${i} strange loop.`)
    } else {
    arr.push(`I am ${i} strange loops.`)
    }
}
  return arr
}

function whileLoop(n){
  while(n > 0){
    console.log(n--);
  }
<<<<<<< HEAD
  return "done";
}


function doWhileLoop(arr){
do{
  arr.pop();
} while (arr.length > 0);
return arr;
}
=======
  return "done"
}

function doWhileLoop(arr){
do{
  arr.pop();
} while (arr.length > 0)
}

/*
  describe('doWhileLoop(array)', () => {
    it('removes elements from `array` until `array` is empty or until `incrementVariable()` returns `false`', () => {
      const [array, t] = makeArray()
      const l = array.length

      const newArray = doWhileLoop(array)

      expect(newArray).to.have.length.of.at.most(l - 1)
    })
  })
})
*/
>>>>>>> 3c216cad06edcf54b3e118335a490a52171b41e6
