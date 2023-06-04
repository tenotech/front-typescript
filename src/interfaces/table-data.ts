export interface TableData {
    languageOptions: LanguageOption[];
    monthOptions: MonthOption[];
    users: User[];
  }

export interface LanguageOption {
    value: string;
    label: string;
  }
  
export interface MonthOption {
    value: string;
    label: string;
  }
  
export interface User {
    name: string;
    language: string;
    month: string;
    accept: boolean;
  }