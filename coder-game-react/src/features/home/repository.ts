import axios from "axios";
import { endpoint } from "../../constant";
import { ResponseInterface } from "../global/type";
import { OtherDocsInterface } from "./type";

export async function readOtherDocsList() {
  let response: ResponseInterface;
  let data: OtherDocsInterface[] = [];
  await axios
    .get(endpoint + "/other-docs-list")
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
      data = response.data;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return data;
}

export async function createOtherDocs(otherDocs: OtherDocsInterface) {
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };
  let payload = {
    name: otherDocs.name,
  };
  await axios
    .post(endpoint + "/add-ans", payload)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}

export async function updateOtherDocs(
  id: number,
  otherDocs: OtherDocsInterface
) {
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };
  let payload = {
    name: otherDocs.name,
  };
  await axios
    .patch(endpoint + "/other-docs/" + id, payload)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}

export async function deleteOtherDocs(id: number) {
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };
  await axios
    .delete(endpoint + "/other-docs/" + id)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}
