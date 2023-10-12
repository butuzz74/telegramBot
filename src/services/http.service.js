import axios from "axios";
import configFile from "../config/config.json"

axios.defaults.baseURL = configFile.apiEndpoint

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
};

export default httpService;