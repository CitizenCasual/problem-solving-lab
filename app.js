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
//*----------03calculate-------------*//

function calculate(num1, num2, operation) {
  if (operation === 'add') {
    return num1 + num2
  } if (operation === 'sub') {
    return num1 - num2
  } if (operation === 'mult') {
    return num1 * num2
  } if (operation === 'div') {
    return num1 / num2
  } if (operation === 'exp') {
    return num1 ** num2
  }
}

console.log(calculate(4, 3, 'mult'));

//*---------------------------------*//