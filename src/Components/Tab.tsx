import React, { useEffect, useState } from 'react';
import { fetchTabs } from '../services/api';
import { TabData } from '../interfaces/tab-data';

const Tab: React.FC = () => {
  const [tabs, setTabs] = useState<TabData[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    // Fetch tab data from the backend API
    fetchTabs()
      .then((data) => setTabs(data))
      .catch((error) => console.error(error));
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-menu">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab] && <p>{tabs[activeTab].title}</p>}
      </div>
    </div>
  );
};

export default Tab;
