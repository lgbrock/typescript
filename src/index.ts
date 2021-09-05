// Basic types
let id: number = 5;
let company: string = 'LoganDev';
let isLoggedIn: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3];

ids.push(4);

// Tuple
let person: [number, string, boolean] = [1, 'Logan', true];

// Tuple Array
let people: [number, string, boolean][];

people = [
	[1, 'Logan', true],
	[2, 'Turkey', true],
	[3, 'Mary', false],
];

// Union
let union: number | string = 30;

// Enum
enum Direction1 {
	Up = 1,
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

// Objects
type User = {
	id: number;
	name: string;
	age: number;
};
const user: User = {
	id: 1,
	name: 'Logan',
	age: 30,
};

// Type Assertion
let assertion: any = 1;
// let customerID = <number>assertion;
let customerID = assertion as number;

// Function
function addNum(a: number, b: number): number {
	return a + b;
}

// Void
function log(message: string | number): void {
	console.log(message);
}

// Interfaces
interface UserInterface {
	readonly id: number;
	name: string;
	age?: number;
}

const user1: UserInterface = {
	id: 1,
	name: 'Logan',
};

// Interface with function
interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}

// Classes
class Person implements PersonInterface {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	register() {
		return `${this.name} is now registered`;
	}
}

const brad = new Person(1, 'Logan Brock');
const mike = new Person(2, 'Turkey Dog');

// Subclasses
class Employee extends Person {
	position: string;

	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(3, 'Logan', 'Software Engineer');

// Generics
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['brad', 'John', 'Jill']);

numArray.push(1); // Throws error
