const mongoose = require('mongoose');

const ConnectDB = async (conn) => {
    try {
        const connection = await mongoose.connect(conn)
        console.log("Database Connected Succesfully", connection.connection.name);
        return connection;
    } catch (err) {
        console.log("Database Connection Error", err);
        process.exit(1)
    }
}

module.exports = ConnectDB;