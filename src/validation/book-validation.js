import ResponseError from "../error-handler/response-error.js";

const createBookValidation = (data) => {
  if (!data.name)
    throw new ResponseError(
      "fail",
      400,
      "Gagal menambahkan buku. Mohon isi nama buku"
    );

  if (!data.year)
    throw new ResponseError(
      "fail",
      400,
      "Gagal menambahkan buku. Mohon isi tahun terbit buku"
    );

  if (!data.author)
    throw new ResponseError(
      "fail",
      400,
      "Gagal menambahkan buku. Mohon isi penulis buku"
    );

  if (!data.summary)
    throw new ResponseError(
      "fail",
      400,
      "Gagal menambahkan buku. Mohon isi ringkasan buku"
    );

  if (!data.publisher)
    throw new ResponseError(
      "fail",
      400,
      "Gagal menambahkan buku. Mohon isi penerbit buku"
    );

  if (!data.pageCount)
    throw new ResponseError(
      "fail",
      400,
      "Gagal menambahkan buku. Mohon isi jumlah halaman buku"
    );

  if (!data.readPage)
    throw new ResponseError(
      "fail",
      400,
      "Gagal menambahkan buku. Mohon isi jumlah halaman yang sudah dibaca"
    );

  if (data.readPage > data.pageCount)
    throw new ResponseError(
      "fail",
      400,
      "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
    );
};

const updateBookValidation = (data) => {
  if (!data.name)
    throw new ResponseError(
      "fail",
      400,
      "Gagal memperbarui buku. Mohon isi nama buku"
    );

  if (!data.year)
    throw new ResponseError(
      "fail",
      400,
      "Gagal memperbarui buku. Mohon isi tahun terbit buku"
    );

  if (!data.author)
    throw new ResponseError(
      "fail",
      400,
      "Gagal memperbarui buku. Mohon isi penulis buku"
    );

  if (!data.summary)
    throw new ResponseError(
      "fail",
      400,
      "Gagal memperbarui buku. Mohon isi ringkasan buku"
    );

  if (!data.publisher)
    throw new ResponseError(
      "fail",
      400,
      "Gagal memperbarui buku. Mohon isi penerbit buku"
    );

  if (!data.pageCount)
    throw new ResponseError(
      "fail",
      400,
      "Gagal memperbarui buku. Mohon isi jumlah halaman buku"
    );

  if (!data.readPage)
    throw new ResponseError(
      "fail",
      400,
      "Gagal memperbarui buku. Mohon isi jumlah halaman yang sudah dibaca"
    );

  if (data.readPage > data.pageCount)
    throw new ResponseError(
      "fail",
      400,
      "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
    );
};

export { createBookValidation, updateBookValidation };
