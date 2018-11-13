// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
// };



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      gas:  6000000,
      gasPrice: 1,
      network_id: "*" // Match any network id
    }
  },
};
