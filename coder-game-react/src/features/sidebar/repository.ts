// import * as ls from "../../utils/local_storage";
// import { makeStorage } from "../../utils/storage";
import { StoreInterface } from "../global/type";
import sidebar_data from "./sidebar";
import { SideBar } from "./type";

const AppDataKey = "app_data";

export function getAppData(): StoreInterface {
  // let ls = makeStorage(localStorage);
  let ls = localStorage;
  let appData: string = ls.getItem(AppDataKey) ?? "";


  let data: StoreInterface;

  if (appData.length) {
    data = JSON.parse(appData);
  } else {
    data = sidebar_data as StoreInterface;
    ls.setItem(AppDataKey, JSON.stringify(data));
  }

  console.log(data); // Only Dev
  return data;
}
