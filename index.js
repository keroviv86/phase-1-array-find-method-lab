
// function superbowlWin(record){
//     let winningYear = record.find((item) => item.result ==='W')
//     if (winningYear){
//         return winningYear.year
//     }    
// }

// superbowlWin(record)

function superbowlWin(record){
    let yearWon= record.find(function(element){
        return element.result === "W"
    })
    if(yearWon){
        return yearWon.year
    }
}

superbowlWin(record)
// function superbowlWin(record){
//     return record.find(item => item.result === "W")
// function superbowlWin(array, finder){
//     let result = null
//     for(let item of array){
//         if(finder(item) ===true){
//             result = item
//             break
//         }
//     }
//     return result
// }


// function isW(w){
//     return w.result === 'W'
// }


//will loop through array
//find first object whose condition returns true based on a callback