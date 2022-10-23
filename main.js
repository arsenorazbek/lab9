
function task1() {
    result = "Hello, World!"
    console.log(result + "\r\n" + result+"\r\n" + result) 
}
task1()

function task9(){
    const input = prompt("Enter Number: ")
    if (Number(input) < 0) {
        console.log("Number is negative")
      } else if (Number(input)> 0) {
        console.log("Number is positive")
      } else if (Number(input) == 0){
        console.log("Number is zero")
      } else {
        console.log("Not number")
      }
}
task9()
function task4(){
    const input = prompt("What's your name?");
    console.log(`Hi, ${input}!`);
}

task4()


