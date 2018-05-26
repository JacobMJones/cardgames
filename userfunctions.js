module.exports = function(name, password, database) {


    console.log("info from form", name, password);
    let user = {
        "name": name,
        "password": password
    }
    console.log(user);
    database.collection('data').insertOne(user, function(err, res) {
        if (err) throw err;
        console.log('1 document inserted');

    })

};