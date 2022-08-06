module.exports = function check(str, bracketsConfig) {
  
  if (str === '' || str.length % 2 != 0) return false

  let openBrackets = []
  let closeBrackets = []
  let pairBrackets = []

  bracketsConfig.forEach(item => {
    if (item[0] == item[1]) pairBrackets.push(item[0])
    else {
      openBrackets.push(item[0])
      closeBrackets.push(item[1])
    }
  })

  let stack = []

  for (let i = 0; i < str.length; i++) {
    let indexClose = closeBrackets.indexOf(str[i])
    let indexPair = pairBrackets.indexOf(str[i])

    if (openBrackets.includes(str[i])) stack.push(str[i])

    else if (closeBrackets.includes(str[i])) {      
      if (stack.length === 0) return false
      if (stack[stack.length - 1] == openBrackets[indexClose]) stack.length -= 1
      else stack.push(str[i])

    } else if (pairBrackets.includes(str[i])) {
      if (stack[stack.length - 1] == pairBrackets[indexPair]) stack.length -= 1
      else stack.push(str[i])
    }
  }
  return stack.length === 0 ? true : false
}