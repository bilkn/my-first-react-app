import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.css';
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/71pUK2k0uHL._AC_UL320_.jpg"
        alt="Dune"
      />
      <h1 style={{ marginBottom: '1rem' }}>
        Dune: Book 1 (Dune: the Graphic Novel) (Volume 1)
      </h1>
      <h4>Frank Herbert</h4>
    </article>
  );
};
ReactDOM.render(<BookList />, document.getElementById('root'));
