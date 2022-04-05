// one(plus(three())) => 4

type Operation = (callback: number) => number;

export const one = (operation?: Operation) => operation ? operation(1) : 1

export const two = (operation?: Operation) => operation ? operation(2) : 2

export const three = (operation?: Operation) => operation ? operation(3) : 3

// function four() {}
// function five() {}
// function six() {}
// function seven() {}
// function eight() {}
// function nine() {}

export const plus = (b: number) => (a: number) => a + b

export const minus = (b: number) => (a: number) => a - b

export const multiply = (b: number) => (a: number) => a * b

export const divide = (b: number) => (a: number) => a / b
