export class Book {
  constructor(public title: string, public author: string) {}
}

const sunAlsoRises = new Book('The Sun Also Rises', 'Ernest Hemingway');
const kavAndClay = new Book('The Amazing Adventures of Kavalier and Clay', 'Michael Chabon');
const theTrial = new Book('The Trial', 'Franz Kafka')
const tropicOfCancer = new Book('Tropic of Cancer', 'Henry Miller');

export const books = {
  sunAlsoRises,
  kavAndClay,
  theTrial,
  tropicOfCancer
};

export const favoriteBooks = [sunAlsoRises, kavAndClay];

export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public favorites: { drink: string },
    public favoriteBooks: Array<Book>,
  ) {}
}

export const chris = new Person('Chris', 'Freeman', 30, { drink: 'Old-Fashioned' }, favoriteBooks);
