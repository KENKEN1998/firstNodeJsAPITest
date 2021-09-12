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

Book.create = function (data, result) {
    result(data);
}

Book.remove = function(id, result){
    result("Xoa bo co id " + id + " thanh cong");
}

Book.update = function (data, result) {
    result(data);
}

module.exports = Book;
