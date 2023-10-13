import httpService from "./http.service";

const orderEndPoint = "/order"

const orderService = {
    create: async (order) => {
        const {data} = await httpService.post(orderEndPoint, order);
        return data
    }
}

export default orderService