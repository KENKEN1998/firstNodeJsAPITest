const Book = function(book) {
    this.id = book.id;
    this.name = book.name;
}

Book.get_all = function (result) {
    var data = [
        { "id": 1, "name": "Book name 1" },
        { "id": 1, "name": "Book name 1" },
        { "id": 1, "name": "Book name 1" },
        { "id": 1, "name": "Book name 1" },
        { "id": 1, "name": "Book name 1" }
    ];
    result(data);
}

Book.getById = function (id) {
    var data = { "id": id, "name": "Book name 1" }
    return data;
}
module.exports = Book;
