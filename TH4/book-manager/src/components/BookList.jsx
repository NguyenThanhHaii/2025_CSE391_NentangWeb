const BookList = (props) => {
  return (
    <div>
      <h2>Danh sách sách</h2>
      <ul>
        {props.books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author} ({book.year}){" "}
            <button onClick={() => props.onEdit(book)}>Sửa</button>{" "}
            <button onClick={() => props.onDelete(book.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookList;
