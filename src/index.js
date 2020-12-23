import React from 'react';
import ReactDOM from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71pUK2k0uHL._AC_UL320_.jpg"
    alt="Dune"
  />
);

const Title = () => <h1>Dune: Book 1 (Dune: the Graphic Novel) (Volume 1)</h1>;
const Author = () => <h4>Frank Herbert</h4>;
ReactDOM.render(<BookList />, document.getElementById('root'));
