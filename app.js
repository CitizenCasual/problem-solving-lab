//*-----Problem Solving Lab-----*//

//*-----01printGreeting-----*//

function printGreeting(name) {
  return `Hello there, ${name}`
}

console.log(printGreeting('Slimer'));

//*---------------------------------*//
//*----------02reverseOrder---------*//

function reverseWordOrder(str) {
  let arr = str.split(' ')
  let rev = arr.reverse()
  let final = rev.join(' ')
  return final
}

console.log(reverseWordOrder('Ishmael Me Call'));

//*----------------------------------*//