import React, { useState } from 'react';

function InputNote({ onAddNote }) {
  const [char, setChar] = useState(50);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'body') {
      setBody(value);
    }
    if (name === 'title') {
      if (value.length > 50) {
        return;
      }
      setChar(50 - value.length);
      setTitle(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote({ title, body });
    setBody('');
    setTitle('');
  }

  return (
    <>
      <div className="note-input">
        <h2>Buat catata</h2>
        <form onSubmit={handleSubmit}>
          <p className="note-input__title__char-limit">Sisa karakter: {char}</p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required=""
            value={title}
            name='title'
            onChange={handleChange}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catata-mu di sini ..."
            value={body}
            required=""
            name='body'
            onChange={handleChange}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    </>
  );
}

export default InputNote;
