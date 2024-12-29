import {create} from 'zustand';

export const useResponseDataStore = create((set) => ({
  responseData: [],
  setResponseData: (item) => set({ responseData: item }),
}));

export const useProductsStore = create((set => ({
  products: [],
  setProducts: (item) => set({ products: item})
})))

export const useSearchTermStore = create((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export const useReceivedDataStore = create((set) => ({
  receivedData: false,
  setReceivedData: (bool) => set({ receivedData: bool}),
}))