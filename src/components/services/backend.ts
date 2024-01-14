import { ACTION_TYPES, baseURL } from "../../utils/urls";
import RestService from "./rest";

export const serviceClient = new RestService({baseURL: baseURL});
const getClient = () => serviceClient.client;

export const GetDataMetric = (pageSize = 10, pageIndex = 0) => {
   console.log(process.env.FUNCTION_KEY)
    const url = `${baseURL}?code=NMDmonTwYDcXOsyZBGVUYEEIIS7c-baRlcILOfbfMbO7AzFucOUudQ==&actionType=${ACTION_TYPES.DATA_METRIC}&pageSize=${pageSize}&pageIndex=${pageIndex}`;
    return getClient().get(url);
  };
export const GetGameRevenue=(start_timestamp:number,end_timestamp:number)=>{
  const url = `http://localhost:7073/api/fetchGameRevenue?start_timestamp=${start_timestamp}&end_timestamp=${end_timestamp}`;
    return getClient().get(url);
}
//http://localhost:7073/api/fetchGameRevenue?start_timestamp=1673595602000&end_timestamp=1705166798000
