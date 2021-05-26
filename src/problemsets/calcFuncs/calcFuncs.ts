// one(plus(three())) => 4

export function one(callback?: Function): number {
  return callback ? callback(1) : 1
}

export function two(callback?: Function): number {
  return callback ? callback(2) : 2
}

export function three(callback?: Function): number {
  return callback ? callback(3) : 3
}

function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

export function plus(b: number) {
  return (a: number) => a + b
}

export function minus(b: number) {
  return (a: number) => a - b
}

export function multiply(b: number) {
  return (a: number) => a * b
}

export function divide(b: number) {
  return (a: number) => a / b
}
