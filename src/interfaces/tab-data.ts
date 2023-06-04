import { User } from "./table-data";

export interface TabData {
    title: string;
    id: string;
    context: string;
    options: string[];
    users: User[];
  }
  