module.exports = function(name, password, database) {
    let userQuery = { name: name }

    console.log('user query', userQuery);
    // let query = { 'name': 'Jacob Jones' };
    let userDocument = database.collection('data').findOne(userQuery);
    console.log(userDocument);





    // let passwordToCheck = database.collection('data').findOne(userQuery, password);
    // console.log('passwordToCheck', passwordToCheck);

    // if (result.password === password) {
    //     console.log('password successful');
    // }


};