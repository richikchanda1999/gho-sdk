const addresses: Record<number, Record<string, `0x${string}`>> = {
    1: {
        // GHO Contracts
        GhoOracle: "0xD110cac5d8682A3b045D5524a9903E031d70FCCd",
        GhoATokenImpl: "0x2f32A274e02FA356423CE5e97a8e3155c1Ac396b",
        GhoVariableDebtTokenImpl: "0x3FEaB6F8510C73E05b8C0Fdf96Df012E3A144319",
        GhoStableDebtTokenImpl: "0x05b435C741F5ab03C2E6735e23f1b7Fe01Cc6b22",
        GhoInterestRateStrategy: "0x16E77D8a7192b65fEd49B3374417885Ff4421A74",
        GhoDiscountRateStrategy: "0x4C38Ec4D1D2068540DfC11DFa4de41F733DDF812",
        GhoToken: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
        GhoFlashMinter: "0xb639D208Bcf0589D54FaC24E655C79EC529762B8",
        Payload: "0x16765d275c00Caa7Ec9a30D1629fD42121c3ae6B",
        Create2Helper: "0xeCEBeDBF26013Fb55A5b0a275191A90984E5Ae5e",
        UiGhoDataProvider: "0x379c1EDD1A41218bdbFf960a9d5AD2818Bf61aE8",
        // AAVE Contracts
        ACLManager: "0xc2aaCf6553D20d1e9d78E365AAba8032af9c85b0",
        Pool: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
        PoolConfigurator: "0x64b761D848206f447Fe2dd461b0c635Ec39EbB27",
        Incentives: "0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb",
        PoolAddressProvider: "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e",
        WalletBalanceProvider: "0xC7be5307ba715ce89b152f3Df0658295b3dbA8E2",
        AaveOracle: "0x54586bE62E3c3580375aE3723C145253060Ca0C2",
        WrappedTokenGateway: "0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9"
    },
    11155111: {
        // GHO Contracts
        GhoToken: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
        GhoATokenImpl: "0xD4BDb51fB96996CA24a5C49E7b57f94a1850Fa30",
        GhoDiscountRateStrategy: "0x19cdecE64EDE475ba0EB114ff4E319d64Ef8ECCf",
        GhoInterestRateStrategy: "0x521247B4d0a51E71DE580dA2cBF99EB40a44b3Bf",
        GhoOracle: "0x00f7fecFAEbEd9499e1f3f9d04E755a21E5fc47C",
        GhoStableDebtTokenImpl: "0x2aa7819F2e88aF4cfF8FD0869ABdB97E336101Ee",
        GhoVariableDebtTokenImpl: "0xd4FEA5bD40cE7d0f7b269678541fF0a95FCb4b68",
        GhoFlashMinter: "0xB5d0ef1548D9C70d3E7a96cA67A2d7EbC5b1173E",
        UiGhoDataProvider: "0x69B9843A16a6E9933125EBD97659BA3CCbE2Ef8A",
        GhoSteward: "0x4bF0c2c74717a4e538cfe25DD389C21A139E0096",
        StkAaveTokenV3Proxy: "0x56033E114c61183590d39BA847400F02022Ebe47",
        StkAaveTokenV3Impl: "0xf556C102F47d806E21E8E78438E58ac06A14A29E",
        GhoATokenProxy: "0xd190eF37dB51Bb955A680fF1A85763CC72d083D4",
        GhoStableDebtTokenProxy: "0xdCA691FB9609aB814E59c62d70783da1c056A9b6",
        GhoVariableDebtTokenProxy: "0x67ae46EF043F7A4508BD1d6B94DB6c33F0915844",
        // AAVE Contracts
        ACLManager: "0x7F2bE3b178deeFF716CD6Ff03Ef79A1dFf360ddD",
        Pool: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
        PoolConfigurator: "0x7Ee60D184C24Ef7AfC1Ec7Be59A0f448A0abd138",
        Incentives: "0x4DA5c4da71C5a167171cC839487536d86e083483",
        PoolAddressProvider: "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A",
        WalletBalanceProvider: "0xCD4e0d6D2b1252E2A709B8aE97DBA31164C5a709",
        AaveOracle: "0x2da88497588bf89281816106C7259e31AF45a663",
        WrappedTokenGatewayV3: "0x387d311e47e80b498169e6fb51d3193167d89F7D"
    }
}

export default addresses;