export class Book {
  constructor(public title: string, public author: string) {}
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public favorites: { drink: string },
    public favoriteBooks: Array<Book>,
  ) {}
}

export const sunAlsoRises = new Book('The Sun Also Rises', 'Ernest Hemingway');
export const kavAndClay = new Book('The Amazing Adventures of Kavalier and Clay', 'Michael Chabon');

export const favoriteBooks = [sunAlsoRises, kavAndClay];

const chris = new Person('Chris', 'Freeman', 30, { drink: 'Old-Fashioned' }, favoriteBooks);

export { chris };
