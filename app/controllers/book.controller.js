exports.get_list = function (req, res) {
    var data = [
        { "id": 1, "name": "Book name 1" },
        { "id": 1, "name": "Book name 1" },
        { "id": 1, "name": "Book name 1" },
        { "id": 1, "name": "Book name 1" },
        { "id": 1, "name": "Book name 1" }
    ];

    res.send({ result: data });
}

exports.detail = function (req, res) {
    var data = { "id": req.params.id, "name": "Book name 1" };
    
    res.send({ result: data });
}
