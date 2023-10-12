import httpService from "./http.service";

const massageEndPoint = "/massage"

const massageService = {
    getAll: async () => {
        const {data} = await httpService.get(massageEndPoint);
        return data
    }
}

export default massageService