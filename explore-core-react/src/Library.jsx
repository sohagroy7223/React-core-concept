import Book from "./book";
export default function Library({ books }) {
  return (
    <div>
      <h2>my national central Library</h2>
      <p>book collection : {books.length}</p>
      <p>address: </p>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </ul>
    </div>
  );
}
