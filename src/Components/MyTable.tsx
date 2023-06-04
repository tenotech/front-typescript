import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css'
import { TableData } from '../interfaces/table-data';
import { fetchData, updateUser } from '../services/api';

const MyTable: React.FC = () => {
  const [tableData, setTableData] = useState<TableData | null>(null);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const data = await fetchData();
      setTableData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLanguageChange = async (index: number, language: string) => {
    if (tableData) {
      const user = tableData.users[index];
      await updateUser(user.name, language, user.month, user.accept);
      fetchDataFromAPI();
    }
  };

  const handleMonthChange = async (index: number, month: string) => {
    if (tableData) {
      const user = tableData.users[index];
      await updateUser(user.name, user.language, month, user.accept);
      fetchDataFromAPI();
    }
  };

  const handleAcceptChange = async (index: number, accept: boolean) => {
    if (tableData) {
      const user = tableData.users[index];
      await updateUser(user.name, user.language, user.month, accept);
      fetchDataFromAPI();
    }
  };


  if (!tableData) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Language</th>
          <th>Month</th>
          <th>Accept</th>
        </tr>
      </thead>
      <tbody>
        {tableData.users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>
              <select
                value={user.language}
                onChange={(e) => handleLanguageChange(index, e.target.value)}
              >
                {tableData.languageOptions.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <select
                value={user.month}
                onChange={(e) => handleMonthChange(index, e.target.value)}
              >
                {tableData.monthOptions.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="checkbox"
                checked={user.accept}
                onChange={(e) =>
                  handleAcceptChange(index, e.target.checked)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
