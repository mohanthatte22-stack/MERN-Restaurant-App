const dns = require("dns");
const mongoose = require("mongoose");

// Home routers often block SRV DNS lookups needed by mongodb+srv://
// Using Google's public DNS (8.8.8.8) to resolve MongoDB Atlas SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Database is successfully connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
