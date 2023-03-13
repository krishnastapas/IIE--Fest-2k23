import { SideBar } from "../sidebar/type";

export interface StoreInterface {
  currentProblemNumber: number;
  sidebarItems: SideBar[];
}

export interface ResponseInterface {
  code: number;
  message: string;
  data?: any;
}