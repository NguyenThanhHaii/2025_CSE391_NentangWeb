import React, { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  // Hàm thêm
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Hàm cập nhật
  const handleUpdateBook = (updatedBook) => {
    const newList = books.map((b) =>
      b.id === updatedBook.id ? updatedBook : b
    );
    setBooks(newList);
    setEditingBook(null); // Thoát chế độ sửa
  };

  // Khi bấm nút "Sửa" trong BookList
  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    const newList = books.filter((b) => b.id !== id);
    setBooks(newList);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Quản Lý Sách</h1>
      <BookForm
        onAdd={handleAddBook}
        onUpdate={handleUpdateBook}
        editingBook={editingBook}
      />
      <BookList
        books={books}
        onEdit={handleEditClick}
        onDelete={handleDeleteBook}
      />
    </div>
  );
}

export default App;
