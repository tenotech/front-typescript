// api.ts

import axios from 'axios';
import { TableData } from '../interfaces/table-data';
import { TabData } from '../interfaces/tab-data';

const BASE_URL = 'http://localhost:3001/api';

export const fetchData = async (): Promise<TableData> => {
  try {
    const response = await axios.get<TableData>(`${BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const updateUser = async (name: string, language: string, month: string, accept: boolean): Promise<void> => {
  try {
    await axios.put(`${BASE_URL}/data/user`, { name, language, month, accept });
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const fetchTabs = async (): Promise<TabData[]> => {
    try {
      // Fetch tab data from the backend API endpoint
      const response = await fetch('/api/tabs'); // Replace with your backend API endpoint
      const data = await response.json();
      return data as TabData[];
    } catch (error) {
      throw new Error('Failed to fetch tab data from the backend.');
    }
  };
