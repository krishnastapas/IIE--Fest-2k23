import { StoreInterface } from "../features/global/type";


interface StoreReturn{

}
export const useStore = (() => {
  let storeInstance: any;
  let subs: any = [];

  function  createStoreInstance ():StoreReturn {
    //...
    let store = "{}";
    /**
     *
     * @returns object
     */
    const getStore = () => {
      return JSON.parse(store) as StoreInterface;
    };
    /**
     *
     * @param {*} newStore object
     * @returns
     */
    const setStore = (newStore: StoreInterface) => {
      newStore;
      store = JSON.stringify(newStore);
      subs.forEach((fx: any) => fx());
      return store;
    };
    const subscribe = (fx: any) => {
      subs.push(fx);
    };
    const unsubscribe = (fx: any) => {
      let index = subs.indexOf(fx);
      subs.splice(index, 1);
    };

    return [getStore, setStore, subscribe, unsubscribe];
  };

  return () => {
    if (!storeInstance) {
      storeInstance = createStoreInstance();
    }
    return storeInstance;
  };
})();

