export const redimensionarArreglo = (array, numOfCards,año ) => {
    const newArray = [];
    let x
    if(año !== null){
        x = array.filter(item => item.releaseYear === parseInt(año))
        console.log(x)
    }else{
        x = array
    }

    
    for (let i = 0; i < x.length; i += numOfCards) {
      newArray.push(x.slice(i, i + numOfCards));
    }
    
    return newArray;
  };