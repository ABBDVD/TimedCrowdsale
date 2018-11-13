var SimpleToken = artifacts.require("./SimpleToken.sol");
var MyTimedCrowdsale = artifacts.require("./MyTimedCrowdsale.sol");
var Crowdsale = artifacts.require("./Crowdsale.sol");


module.exports = async function(deployer) {
    // uint public icoStart=1503756000; // = Aug 26 2017 2pm GMT
    // uint public icoEnd;   //1504188000 = Aug 31 2017 2pm GMT
    let token = await SimpleToken.new();
    const openingTime = web3.eth.getBlock('latest').timestamp + 100000; // two secs in the future
    console.log(openingTime)
    const closingTime = openingTime + 86400 * 20; // 20 days
    // const rate = new web3.BigNumber(1000);
    // const wallet = accounts[1]
    let myTimedCrowdsale = await MyTimedCrowdsale.new(new web3.BigNumber(1), web3.eth.accounts[0], token.address, openingTime, closingTime);
    await token.transfer(myTimedCrowdsale.address, new web3.BigNumber('1e22'));
};
