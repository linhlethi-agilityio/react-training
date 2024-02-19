import React from "react";

//Example Lifting state up
const Part = ({ book, onChangeText }) => {
  return (
    <div>
      Description:
      <input
        value={book.description}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
};

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      newBook: {
        title: "",
        description: "123",
      },
    };
  }

  renderBooks = (books) =>
    books.map((book, index) => {
      console.log(book);
      return (
        <div key={book.index}>
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          <input
            value={book.title}
            onChange={(e) => this.handleEditBook(e.target.value, index)}
          />
        </div>
      );
    });

  handleEditBook = (value, editIndex) => {
    const { books } = this.state;
    const newBooks = books.map((book, index) => {
      if (index === editIndex) {
        book.title = value;
      }
      return book;
    });
    this.setState({ books: newBooks });
  };

  handleAdd = (e) => {
    const { newBook } = this.state;
    newBook.title = e.target.value;
    this.setState({ newBook: newBook });
  };

  handleSubmit = () => {
    const { newBook, books } = this.state;
    books.push({
      title: newBook.title,
      description: newBook.description,
    });
    console.log(books);
    this.setState({ books });
  };

  onChangeText = (description) => {
    const { newBook } = this.setState;
    newBook.description = description;
    this.setState({ newBook });
  };

  render() {
    const { books, newBook } = this.state;
    return (
      <div className="App">
        Form:
        <br></br>
        <span>Title:</span>
        <input value={newBook.title} onChange={this.handleAdd} />
        <Part book={newBook} onChangeText={this.onChangeText} />
        <button onClick={this.handleSubmit}>Add</button>
        <hr />
        Hien thi:
        {newBook.description}
        {this.renderBooks(books)}
      </div>
    );
  }
}

export default Books;
