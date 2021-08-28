require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner drop tail solution mansion creek stick mad hockey argue surge talent'; 
let testAccounts = [
"0x60dca96ebf6d54edf296dcbb50e03275db0354ddd52ddf212cd9ced230f5b291",
"0xb0ef5f50812c0f3a99792c049b3285ccf7a60abe1f9a23c32d3b46ba1f28f2de",
"0x95180a6c45fc34cac73d43ff7e4857b49166d3b2b546b8bb4ba1e5f372e8bfc3",
"0x0e31b9139b18648f9b33878f2c7ca9b3f419a65c08c9854cc252eca0e628048a",
"0xf25f514b27bd4203a3befec3763091b13cd5a5ed3d02cd8009237b4f2fd4b5cd",
"0xed67a10bb1af563df82b328f4338e7bb8f563d21339997e634d7aa048a1a9ad7",
"0x52af2c3a4081aef404f45e42ba3a646d531ec7d6d515714a31fab43c93a30c45",
"0xde19f988e0d80a44c0cfc4245f3cab3d41167d0849b36a7c6f6aed9b869d03a6",
"0xfca4a287387e7980d329fcac438a636b4221f8256ed51a4bd4487b702e0c41cf",
"0x72b24d085725ee74d19f7f01c75a993c267246054958632ea10505a14fca3067"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


