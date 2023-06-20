// code your solution here

const record = [
 { year: "2015", result: "W"},
 { year: "2014", result: "N/A"},
 { year: "2013", result: "L"}
]

function superBowlWin(record){
    
     if(record.result==="W"){
        return record.year
     }else if(record!=="W"){
      return undefined
     }
}
record.find(superBowlWin)