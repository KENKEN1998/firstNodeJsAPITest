const db = require('../common/connect');

const Book = function (book) {
    this.id = book.id;
    this.name = book.name;
    this.imgpath = book.imgpath;
}

Book.get_all = function (result) {
    db.query("SELECT * FROM users", function (err, data) {
        if (err || data.length == 0) {
            return (null);
        } else {
            result(data[0]);
        }
    });
}

Book.getById = function (id, result) {
    db.query("SELECT * FROM users WHERE id = ?", function (err, data) {
        if (err) {
            return (null);
        } else {
            result({id: data});
        }
    });
}

Book.create = function (data, result) {
    db.query("INSERT INTO users SET ?", data, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result({ id: data.insertId, ...data });
        }
    });
}

Book.remove = function (id, result) {
    db.query("DELETE FROM users WHERE id = ?", id, function (err, data) {
        if (err) {
            return (null);
        } else {
            result("Removed id " + id + " successfull");
        }
    });
}

Book.update = function (s, result) {
    db.query("UPDATE users SET name=?, password=?,imgpath=? WHERE id=?", [s.name, s.password, s.imgpath, s.id], function (err, data) {
        if (err) {
            return (null);
        } else {
            result(s);
        }
    });
}

module.exports = Book;
