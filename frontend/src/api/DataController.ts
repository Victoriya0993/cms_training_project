import axios, { AxiosResponse } from "axios";

const baseURL = "http://localhost:5002";

export interface RequestArgs {
  title: string;
}

export interface Response {
  id: string;
  title: string;
  content: Object;
}

export class DataController {
  // название страницы, которую хотим создать
  createNewPage = async (title) => {
    const response = (await axios.post(
      `${baseURL}/createnewpage/`, {
      title: title
    }
    )) as AxiosResponse<Response>;

    const pageInfo = response.data;
    return pageInfo;
  };

  getAllPages = async () => {
    const response = (await axios.get(
      `${baseURL}`
    )) as AxiosResponse<Response>;

    console.log(response)
    const pageInfo = response.data;
    return pageInfo;
  };
}


