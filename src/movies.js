// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    let directors= arr.map(function(elem,ind){
        return elem.director
    })
   console.log(arr.length) 
  return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    let movies= arr.filter(function(elem,ind){
        return(elem.director==="Steven Spielberg" && movie.genre.includes("Drama"))   
    })
    return movies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if(arr.length===0) return 0;
    let avg =arr.reduce(function(acc, elem){
        if (!elem.rates){
        return acc + 0;   
        }
        return acc + elem.rate
        
    },0)
    
    return (avg/arr.length).toFixed(2);
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    if(arr.length===0) return 0;
    let avg =arr.reduce(function(acc, elem){
        if (movie.genre.includes("Drama")){
         return acc + elem.rate  
        }
        return acc
        
    },0)

    return (avg/arr.length).toFixed(2)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    let order=arr.sort(function(num1,num2){
        if(num1>num2){
            return 1
        }
        else if (num1<num2){
            return -1
        }
        else if(num1=num2){
                orderTittle.sort(function(a,b){
                    if(tittle1>tittle2){
                        return 1
                    }
                    else if(tittle1<tittle2){
                        return -1
                    }
                    return 0
                })
        }
        else{
            return 0
        }
    
    })
    return order.slice(0,20);
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
let tittleOrder= arr.sort(function(tittle1,tittle2){
    if(tittle1>tittle2){
        return 1
    }
    else if (tittle1<tittle2){
        return -1
    }
    else{
        return 0
    }
})
return tittleOrder.slice(0,20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
