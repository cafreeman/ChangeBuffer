export class Book {
  constructor(public title: string, public author: string) {}

  describe() {
    return (`The name of this book is ${this.title}`);
  }
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public favoriteBooks: Array<Book>,
  ) {}

  sayHello(person: Person | null) {
    let response = person ? `Hello ${person.firstName}` : `Hello stranger`;
    console.log(response);
  }
}

export const sunAlsoRises = new Book('The Sun Also Rises', 'Ernest Hemingway');
export const kavAndClay = new Book('The Amazing Adventures of Kavalier and Clay', 'Michael Chabon');

export const favoriteBooks = [sunAlsoRises, kavAndClay];

const chris = new Person('Chris', 'Freeman', 30, favoriteBooks);

export { chris };
