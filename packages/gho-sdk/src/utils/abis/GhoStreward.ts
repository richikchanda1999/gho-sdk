export default [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "addressesProvider",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "ghoToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "riskCouncil",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "shortExecutor",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint40",
                "name": "oldStewardExpiration",
                "type": "uint40"
            },
            {
                "indexed": false,
                "internalType": "uint40",
                "name": "newStewardExpiration",
                "type": "uint40"
            }
        ],
        "name": "StewardExpirationUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BORROW_RATE_CHANGE_MAX",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "GHO_TOKEN",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINIMUM_DELAY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL_ADDRESSES_PROVIDER",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "RISK_COUNCIL",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "STEWARD_LIFESPAN",
        "outputs": [
            {
                "internalType": "uint40",
                "name": "",
                "type": "uint40"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "extendStewardExpiration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllStrategies",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStewardExpiration",
        "outputs": [
            {
                "internalType": "uint40",
                "name": "",
                "type": "uint40"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTimelock",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint40",
                        "name": "borrowRateLastUpdated",
                        "type": "uint40"
                    },
                    {
                        "internalType": "uint40",
                        "name": "bucketCapacityLastUpdated",
                        "type": "uint40"
                    }
                ],
                "internalType": "struct IGhoSteward.Debounce",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newBorrowRate",
                "type": "uint256"
            }
        ],
        "name": "updateBorrowRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "newBucketCapacity",
                "type": "uint128"
            }
        ],
        "name": "updateBucketCapacity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]