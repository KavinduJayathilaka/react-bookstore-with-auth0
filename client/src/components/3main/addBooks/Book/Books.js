import React from "react";
import Axios from "axios";
import Book from "./Book";
import { useEffect, useState } from "react";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await Axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
