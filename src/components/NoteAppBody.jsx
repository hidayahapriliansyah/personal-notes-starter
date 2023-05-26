import React from 'react';

function NoteAppBody() {
  return (
    <div class="note-app__body">
      <div class="note-input">
        <h2>Buat catata</h2>
        <form>
          <p class="note-input__title__char-limit">Sisa karakter: 50</p>
          <input
            class="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required=""
            value=""
          />
          <textarea
            class="note-input__body"
            type="text"
            placeholder="Tuliskan catata-mu di sini ..."
            required=""
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
      <h2>Catata Aktif</h2>
      <div class="notes-list">
        <div class="note-item">
          <div class="note-item__content">
            <h3 class="note-item__title">Babel</h3>
            <p class="note-item__date">Kamis, 14 April 2022</p>
            <p class="note-item__body">
              Babel merupakan tools open-source yang digunakan untuk mengubah
              sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh
              JavaScript engine versi lama. Babel sering dipakai ketika kita
              menggunakan sintaks terbaru termasuk sintaks JSX.
            </p>
          </div>
          <div class="note-item__action">
            <button class="note-item__delete-button">
              <span class="material-symbols-outlined">delete</span>
              Delete
            </button>
            <button class="note-item__archive-button">
              <span class="material-symbols-outlined">archive</span>
              Arsipkan
            </button>
          </div>
        </div>
        <div class="note-item">
          <div class="note-item__content">
            <h3 class="note-item__title">Functional Component</h3>
            <p class="note-item__date">Kamis, 14 April 2022</p>
            <p class="note-item__body">
              Functional component merupakan React component yang dibuat
              menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat
              disebut component ia harus mengembalikan React element dan
              dipanggil layaknya React component.
            </p>
          </div>
          <div class="note-item__action">
            <button class="note-item__delete-button">Delete</button>
            <button class="note-item__archive-button">Arsipkan</button>
          </div>
        </div>
        <div class="note-item">
          <div class="note-item__content">
            <h3 class="note-item__title">Modularization</h3>
            <p class="note-item__date">Kamis, 14 April 2022</p>
            <p class="note-item__body">
              Dalam konteks pemrograman JavaScript, modularization merupakan
              teknik dalam memecah atau menggunakan kode dalam berkas JavaScript
              secara terpisah berdasarkan tanggung jawabnya masing-masing.
            </p>
          </div>
          <div class="note-item__action">
            <button class="note-item__delete-button">Delete</button>
            <button class="note-item__archive-button">Arsipkan</button>
          </div>
        </div>
        <div class="note-item">
          <div class="note-item__content">
            <h3 class="note-item__title">Lifecycle</h3>
            <p class="note-item__date">Kamis, 14 April 2022</p>
            <p class="note-item__body">
              Dalam konteks React component, lifecycle merupakan kumpulan method
              yang menjadi siklus hidup mulai dari component dibuat
              (constructor), dicetak (render), pasca-cetak (componentDidMount),
              dan sebagainya.{' '}
            </p>
          </div>
          <div class="note-item__action">
            <button class="note-item__delete-button">Delete</button>
            <button class="note-item__archive-button">Arsipkan</button>
          </div>
        </div>
        <div class="note-item">
          <div class="note-item__content">
            <h3 class="note-item__title">ESM</h3>
            <p class="note-item__date">Kamis, 14 April 2022</p>
            <p class="note-item__body">
              ESM (ECMAScript Module) merupakan format modularisasi standar
              JavaScript.
            </p>
          </div>
          <div class="note-item__action">
            <button class="note-item__delete-button">Delete</button>
            <button class="note-item__archive-button">Arsipkan</button>
          </div>
        </div>
        <div class="note-item">
          <div class="note-item__content">
            <h3 class="note-item__title">Module Bundler</h3>
            <p class="note-item__date">Kamis, 14 April 2022</p>
            <p class="note-item__body">
              Dalam konteks pemrograman JavaScript, module bundler merupakan
              tools yang digunakan untuk menggabungkan seluruh modul JavaScript
              yang digunakan oleh aplikasi menjadi satu berkas.
            </p>
          </div>
          <div class="note-item__action">
            <button class="note-item__delete-button">Delete</button>
            <button class="note-item__archive-button">Arsipkan</button>
          </div>
        </div>
      </div>
      <h2>Arsip</h2>
      <p class="notes-list__empty-message">Tidak ada catatan</p>
    </div>
  );
}

export default NoteAppBody;
