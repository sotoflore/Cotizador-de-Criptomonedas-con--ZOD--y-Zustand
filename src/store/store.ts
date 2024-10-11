//import axios from "axios";
import { create } from "zustand";
//import { CryptoCurrenciesResponseSchema } from "../schema/crypto-schema";
import { Cryptocurrency, CryptoPrice, Pair } from "../types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService";

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    
    cryptocurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    }, 
    loading: false,
    //result: {} as CryptoPrice,

    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptocurrencies
        }))
    },

    fetchData: async (pair) => {
        
        set(() => ({
            loading: true
        }))

        const result = await fetchCurrentCryptoPrice(pair);
        set(() => ({
            result,
            loading: false
        }))
    }

})))