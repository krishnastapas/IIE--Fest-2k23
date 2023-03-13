
function useLocalStorage() {
    /**
     * Store object in json format on Local Storage
     * @param {*} itemName default 'store'
     * @param {*} data default '{}' and 'null' to avoid
     * @return Boolean 'true' or 'false'
     * @see [help app](http://localhost:3000/) or [help doc](http://localhost:3000/) 
     */
    function setLSItem(itemName = 'store', data = {}) {
        try {
            if (data !== null)
                localStorage.setLSItem(itemName, JSON.stringify(data));
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Local Storage
     * @param {*} itemName default 'store'
     * @return Boolean 'true' or 'false'
     * @see [help app](http://localhost:3000/) or [help doc](http://localhost:3000/) 
     */
    function getLSItem(itemName = 'store') {
        try {
            if (localStorage.getLSItem(itemName) === null) return false;
            return localStorage.getLSItem(itemName);
        } catch (error) {
            return false;
        }
    }

    function getLSValueOf(itemName = 'store', indexName = null) {
        try {
            if (localStorage.getLSItem(itemName) === null) return false;

            let LS = JSON.parse(localStorage.getLSItem(itemName));
            // TODO ad error log only for devloper 
            if (indexName != null && LS[indexName] != undefined) return false;

            return LS[indexName];
        } catch (error) {

        }
    }

    function setLSValueOf(itemName = 'store', indexName = null, value) {
        try {
            let LS = {}
            if (indexName === null) return false;

            if (localStorage.getLSItem(itemName) === null) {
                LS[indexName] = value;
                setLSItem(itemName, LS);
            } else {
                let LS = getLSItem(itemName);
                LS[indexName] = value;
                setLSItem(itemName, LS);
            }
            return true;
        } catch (error) {
            return false;
        }
    }
    function delLSItem(itemName = 'store') {
        try {
            if (localStorage.getLSItem(itemName) !== null) return localStorage.removeItem(itemName);
            return true;
        } catch (error) {
            return false;
        }
    }
    function delLSValueOF(itemName = 'store', indexName = null) {
        try {
            if (indexName === null) return false;

            if (localStorage.getLSItem(itemName) !== null) {
                let LS = getLSItem(itemName);
                delete LS[indexName];
                setLSItem(itemName, LS);
            }
            return true;
        } catch (error) {
            return false;
        }
    }
    return { setLS };
}

export default useLocalStorage;