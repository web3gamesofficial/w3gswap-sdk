import JSBI from 'jsbi'
import { Token, WETH9 } from '@uniswap/sdk-core'

export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
  ARBITRUM_ONE = 42161,
  ARBITRUM_NOVA = 42170,
  ARBITRUM_GOERLI = 421613,
  OPTIMISM = 10,
  OPTIMISM_GOERLI = 420,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  BSC = 56,
  BSC_TESTNET = 97
}

export const FACTORY_ADDRESS = '0x5DbB74b231a4e65560c7cE4ACF84D8Efbfb12669'

export const FACTORY_ADDRESS_TESTNET = '0x94a6319151d7972E9a4dDF1e9ad091CcBC49072a'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS,
  [ChainId.GOERLI]: FACTORY_ADDRESS_TESTNET,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: FACTORY_ADDRESS_TESTNET
}

export const INIT_CODE_HASH = '0x4230e15bff2feef6bb3979f57bf434af9bdc46d919edee74cb299c61776b93c7'

export const WBNB = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  )
}

export const WMATIC = {
  [ChainId.POLYGON]: new Token(
    ChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.POLYGON_MUMBAI]: new Token(
    ChainId.POLYGON_MUMBAI,
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    18,
    'WMATIC',
    'Wrapped Matic'
  )
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.POLYGON]: WMATIC[ChainId.POLYGON],
  [ChainId.POLYGON_MUMBAI]: WMATIC[ChainId.POLYGON_MUMBAI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET]
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
