const mongoose = require('mongoose');

class ConnectionManager {
 constructor() {
    // Initialize connections as an empty object
    this.connections = {};
 }

 async connect(dbName, connectionString) {
    if (!this.connections[dbName]) {
      try{
        const connection = await mongoose.createConnection(connectionString);
        this.connections[dbName] = connection;
        console.log("connected to db ", dbName)
      }catch(err){
        throw new Error(err)
      }
    }
    return this.connections[dbName];
 }

 getConnection(dbName) {
    return this.connections[dbName];
 }

 closeConnections() {
    Object.values(this.connections).forEach(({ connection }) => {
      connection.close();
    });
 }
}

module.exports = new ConnectionManager();
