class Book {
  constructor(public title: string, public author: string) {}

  describe() {
    console.log(`The name of this book is ${this.title}`);
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

const sunAlsoRises = new Book('The Sun Also Rises', 'Ernest Hemingway');
const kavAndClay = new Book('The Amazing Adventures of Kavalier and Clay', 'Michael Chabon');

const someBooks = [sunAlsoRises, kavAndClay];

const blythe = new Person('Blythe', 'Early', 28, someBooks);
const chris = new Person('Chris', 'Freeman', 30, someBooks);

export { blythe, chris };
