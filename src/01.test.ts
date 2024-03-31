import { mult, splitIntoWords, sum } from "./01";


// data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
	a = 1;
	b = 2;
	c = 3;
})

test('sum should be correct', () => {

	// action
	const result = sum(a, b);
	c = 10;
	const result2 = sum(b, c);

	// expect result
	expect(result).toBe(3);
	expect(result2).toBe(12);
})

test('multyply should be correct', () => {
	// data
	const a = 1;
	const b = 2;
	const c = 3;

	// action
	const result = mult(a, b);

	// expect result
	expect(result).toBe(2);
})

test('splitting into words should be correct', () => {
	// data
	const sent1 = 'Hello my friend!'
	const sent2 = 'JS -  the best programming language'


	// action
	const result = splitIntoWords(sent1);
	const result2 = splitIntoWords(sent2);


	// expect result
	expect(result.length).toBe(3);
	expect(result[0]).toBe('hello')
	expect(result[1]).toBe('my')
	expect(result[2]).toBe('friend')

	expect(result2.length).toBe(5);
	expect(result2[0]).toBe('js')
	expect(result2[1]).toBe('the')
	expect(result2[2]).toBe('best')
	expect(result2[3]).toBe('programming')
	expect(result2[4]).toBe('language')
})