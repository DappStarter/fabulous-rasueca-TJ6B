require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind equip inflict private flee seminar'; 
let testAccounts = [
"0x71045e8c701b579fe84ff01644ed1e16e4c40874712c0495cb42cbcca90ad5af",
"0xf5430b7d972225e90dbe9e64886e2c32c638e84e0ee7074f755e75fc2325e6f7",
"0x1d48aa6c4d53424a32c0929eb135c83e57e7d165c724c1536a9c7466433e249c",
"0x87ec0430178cc9bff31ba9102a55a8f8536783748f7c059152363001946e0969",
"0x13ba6c2855d9d33da5cde738707986658c7240fb06540a20f80b125d2cf27817",
"0x94b4cc78187acac31cf68c6ccc08c2243e659862c59db37820a7ae93b5e4ee77",
"0xcd1e6ea095d06c8baa49ad62a50949da2048bbd4d5ea36a96c8b43812d40e561",
"0x7267bd0d8b0b805ed9d44ac2de2ce9f7d813ba0d37e6ba65bf052c3e1e919d4c",
"0x2095320292aa87723ec03460a4ff8c0c56b98b836bf0db623021df7df222f700",
"0x938d5b4941de065180639a02f42f036d073d764a6761ea69090d5090379ed009"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

