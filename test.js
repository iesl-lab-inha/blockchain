const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
//console.log(bitcoin);


const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1566404413989,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1566404682649,
            "transactions": [
                {
                    "amount": 60,
                    "sender": "JKHGJKGH354JHGFHGJHG",
                    "recipient": "KJGJHGFDJHGFC4354765",
                    "transactionId": "2a432ab0c43011e9af3acb782744b24b"
                }
            ],
            "nonce": 14724,
            "hash": "000095b17d818b53a300752b656abdbb689b48ed3b1681b7302d00c4db02d6ff",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1566404717189,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "8e358550c42f11e9af3acb782744b24b",
                    "transactionId": "2e5b7210c43011e9af3acb782744b24b"
                }
            ],
            "nonce": 16849,
            "hash": "00002d506cef1ce7044d4a96ab0e1a7fd0bd21ccc8d476e38e4b7d75386e3c62",
            "previousBlockHash": "000095b17d818b53a300752b656abdbb689b48ed3b1681b7302d00c4db02d6ff"
        },
        {
            "index": 4,
            "timestamp": 1566404850516,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "8e358550c42f11e9af3acb782744b24b",
                    "transactionId": "42eeeea0c43011e9af3acb782744b24b"
                },
                {
                    "amount": 60,
                    "sender": "JKHGJKGH354JHGFHGJHG",
                    "recipient": "KJGJHGFDJHGFC4354765",
                    "transactionId": "8f374870c43011e9af3acb782744b24b"
                },
                {
                    "amount": 60,
                    "sender": "JKHGJKGH354JHGFHGJHG",
                    "recipient": "KJGJHGFDJHGFC4354765",
                    "transactionId": "8f9c99f0c43011e9af3acb782744b24b"
                },
                {
                    "amount": 60,
                    "sender": "JKHGJKGH354JHGFHGJHG",
                    "recipient": "KJGJHGFDJHGFC4354765",
                    "transactionId": "901bdc10c43011e9af3acb782744b24b"
                }
            ],
            "nonce": 119408,
            "hash": "00008ce431945fde34a16721770bae66048d11a041a11496e671daf65a0d86fb",
            "previousBlockHash": "00002d506cef1ce7044d4a96ab0e1a7fd0bd21ccc8d476e38e4b7d75386e3c62"
        },
        {
            "index": 5,
            "timestamp": 1566404851961,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "8e358550c42f11e9af3acb782744b24b",
                    "transactionId": "9266dd80c43011e9af3acb782744b24b"
                }
            ],
            "nonce": 39782,
            "hash": "0000e9fcd88998056ed99875dd56b107b0810bd170c21fe6ffc455f1fa0ea337",
            "previousBlockHash": "00008ce431945fde34a16721770bae66048d11a041a11496e671daf65a0d86fb"
        },
        {
            "index": 6,
            "timestamp": 1566404858927,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "8e358550c42f11e9af3acb782744b24b",
                    "transactionId": "9343d000c43011e9af3acb782744b24b"
                },
                {
                    "amount": 60,
                    "sender": "JKHGJKGH354JHGFHGJHG",
                    "recipient": "KJGJHGFDJHGFC4354765",
                    "transactionId": "956d3fb0c43011e9af3acb782744b24b"
                }
            ],
            "nonce": 10034,
            "hash": "0000c12ae4bbabc4f0c9884f6b6bda89c653d884884a6b76a76a4a0a8d4fd6c0",
            "previousBlockHash": "0000e9fcd88998056ed99875dd56b107b0810bd170c21fe6ffc455f1fa0ea337"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "8e358550c42f11e9af3acb782744b24b",
            "transactionId": "976a4830c43011e9af3acb782744b24b"
        }
    ],
    "networkNodes": [],
    "currentNodeUrl": "http://localhost:3001"
};

console.log("VALID:", bitcoin.chainIsValid(bc1.chain));



/*
const previousBlockHash = '7645374BBHGFG46755653HGFHGFC';
const currentBlockData = [
	{
		amount: 10,
		sender: 'DDGHFDHFJHGJHGJH',
		recipient: 'DHGFDFJHGFHJHG65'
	},
	{
		amount: 30,
		sender: 'GKJHGKJHGFKHFGKGH',
		recipient: 'NBCVNBVCJHGFHJGFJ'
	},
	{
		amount: 50,
		sender: 'JUYTKJHGVHGGKHJ',
		recipient: 'JKHLKJGLKJHLJG'
	}
]
const nonce = 100;

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
*/
//bitcoin.createNewBlock(2389, 'OIUOEREDHGFHGFH', '234hg423hg4f23hg4f3');
//bitcoin.createNewTransaction(100, 'Alex', 'Julia');
//bitcoin.createNewBlock(2384, 'JHDJHSGKSHDKJSH', '234hg423hg4f23hg4fe');
//bitcoin.createNewBlock(2383, 'KJHJHFGJKGHHGHG', 'b4v5h3g5jh345v34jh5');

//console.log(bitcoin.chain[1]);