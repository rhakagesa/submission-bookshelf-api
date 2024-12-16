# Book API Specification

## Models

### Book

Represents a book.

| Property   | Type      |
| ---------- | --------- |
| id         | string    |
| name       | string    |
| year       | number    |
| author     | string    |
| publisher  | string    |
| pageCount  | number    |
| readPage   | number    |
| finished   | boolean   |
| reading    | boolean   |
| insertedAt | timestamp |
| updatedAt  | timestamp |

## Endpoints

### GET /books

Returns a list of books.

#### Response

#### Success

- **Status Code: 200**
- **Response Body**

```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "Qbax5Oy7L8WKf74l",
        "name": "Buku A",
        "publisher": "Dicoding Indonesia"
      },
      {
        "id": "1L7ZtDUFeGs7VlEt",
        "name": "Buku B",
        "publisher": "Dicoding Indonesia"
      },
      {
        "id": "K8DZbfI-t3LrY7lD",
        "name": "Buku C",
        "publisher": "Dicoding Indonesia"
      }
    ]
  }
}
```

```json
{
  "status": "success",
  "data": {
    "books": []
  }
}
```

### GET /books/{bookId}

Returns a book by id.

#### Response

#### Success

- **Status Code: 200**
- **Response Body**

```json
{
  "status": "success",
  "data": {
    "book": {
      "id": "aWZBUW3JN_VBE-9I",
      "name": "Buku A Revisi",
      "year": 2011,
      "author": "Jane Doe",
      "summary": "Lorem Dolor sit Amet",
      "publisher": "Dicoding",
      "pageCount": 200,
      "readPage": 26,
      "finished": false,
      "reading": false,
      "insertedAt": "2021-03-05T06:14:28.930Z",
      "updatedAt": "2021-03-05T06:14:30.718Z"
    }
  }
}
```

##### Error

- **Status Code: 404**
- **Response Body**

```json
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```

### GET /books?name={name}

Returns a list of books with a name matching the specified name.

### POST /books

Creates a new book.

#### Request Body

```json
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

#### Response

#### Success

- **Status Code: 201**
- **Response Body**

```json
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "1L7ZtDUFeGs7VlEt"
  }
}
```

##### Error

- **Status Code: 400**
- **Response Body**

```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. Mohon isi nama buku"
}
```

### PUT /books/{bookId}

Updates a book by id.

#### Request Body

```json
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

#### Response

#### Success

- **Status Code: 200**
- **Response Body**

```json
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```

#### Error

- **Status Code: 404**
- **Response Body**

```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Id tidak ditemukan"
}
```

- **Status Code: 400**
- **Response Body**

```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
```

### DELETE /books/{id}

Deletes a book by id.

#### Response

#### Success

- **Status Code: 200**
- **Response Body**

```json
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```

#### Error

- **Status Code: 404**
- **Response Body**

```json
{
  "status": "fail",
  "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```
