import axios from "axios";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface IRequestParams {
  method: Method;
  url: string;
  baseURL?: string;
  options?: object;
  // TODO: неверно работает generic
  beforeSend?: <T>(data: T) => T;
}

export const request = async ({
  method,
  url,
  baseURL,
  options = {},
  beforeSend
}: IRequestParams) => {
  try {
    const result = await axios({
      baseURL,
      method,
      url,
      withCredentials: true,
      ...options
    });
    // TODO: доделать before and after send
    // if (beforeSend) {
    //   result.data = beforeSend(result.data);
    // }
    return result;
  } catch (e) {
    // TODO: подумать, что здесь сделать
    console.error(e);
  }
};
