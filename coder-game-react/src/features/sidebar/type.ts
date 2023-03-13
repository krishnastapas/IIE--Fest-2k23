export interface SideBar {
  name: string;
  code: string;
  problem: string;
  result: Result;
  message: Message;
}

export interface Result {
  answer: string;
  status: boolean;
}

export interface Message {
  error: string;
}
