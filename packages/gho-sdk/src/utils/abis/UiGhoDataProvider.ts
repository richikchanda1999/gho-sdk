export default [
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "contract IGhoToken",
        name: "ghoToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "GHO",
    outputs: [
      {
        internalType: "contract IGhoToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGhoReserveData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ghoBaseVariableBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ghoDiscountedPerToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ghoDiscountRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ghoMinDebtTokenBalanceForDiscount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ghoMinDiscountTokenBalanceForDiscount",
            type: "uint256",
          },
          {
            internalType: "uint40",
            name: "ghoReserveLastUpdateTimestamp",
            type: "uint40",
          },
          {
            internalType: "uint128",
            name: "ghoCurrentBorrowIndex",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "aaveFacilitatorBucketLevel",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "aaveFacilitatorBucketMaxCapacity",
            type: "uint256",
          },
        ],
        internalType: "struct IUiGhoDataProvider.GhoReserveData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getGhoUserData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userGhoDiscountPercent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userDiscountTokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userPreviousGhoBorrowIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userGhoScaledBorrowBalance",
            type: "uint256",
          },
        ],
        internalType: "struct IUiGhoDataProvider.GhoUserData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
