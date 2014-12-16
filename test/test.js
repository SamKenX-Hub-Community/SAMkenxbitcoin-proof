const btcproof = require('../index'),
  assert = require('assert');

describe('getProof', function() {
  it.skip('should return merkle root of block 100k', function() {
    const txs = [
      '8c14f0db3df150123e6f3dbbf30f8b955a8249b62ac1d1ff16284aefa3d06d87',
      'fff2525b8931402dd09222c50775608f75787bd2b87e56995a7bdd30f79702c4',
      '6359f0868171b1d194cbee1af2f16ea598ae8fad666d9b012c8ed2b79a236ec42010',
      'e9a66845e05d5abc0ad04ec80f774a7e585c6e8db975962d069a522137b80c1d2010'
    ],
      expMerkle = 'f3e94742aca4b5ef85488dc37c06c3282295ffec960994b2c0d5ac2a25a95766';

    var merkle = btcproof.getProof(txs);
    assert.strictEqual(merkle, expMerkle);
  });

  it('should return merkle root of block 106022', function() {
    const txs = [
      "3a459eab5f0cf8394a21e04d2ed3b2beeaa59795912e20b9c680e9db74dfb18c",
      "be38f46f0eccba72416aed715851fd07b881ffb7928b7622847314588e06a6b7",
      "d173f2a12b6ff63a77d9fe7bbb590bdb02b826d07739f90ebb016dc9297332be",
      "59d1e83e5268bbb491234ff23cbbf2a7c0aa87df553484afee9e82385fc7052f",
      "f1ce77a69d06efb79e3b08a0ff441fa3b1deaf71b358df55244d56dd797ac60c",
      "84053cba91fe659fd3afa1bf2fd0e3746b99215b50cd74e44bda507d8edf52e0"
    ],
      expMerkle = '9cdf7722eb64015731ba9794e32bdefd9cf69b42456d31f5e59aedb68c57ed52';

    var merkle = btcproof.getProof(txs);
    assert.strictEqual(merkle, expMerkle);
  });
})
