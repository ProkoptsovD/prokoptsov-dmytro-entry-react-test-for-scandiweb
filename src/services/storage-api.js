const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
  const clear = (...keys) => {
    !keys.length ? localStorage.clear() : keys.forEach(key => localStorage.removeItem(key));
  }
  
const storeApi = {
    save,
    load,
    clear,
};
export default storeApi;