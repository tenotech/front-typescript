## About this project 

fetch data from backend
fetch tabs data (title + content)

Tab --> Table

in Tab: fetchData from backend (tabs titles + tabs content) --> in Table: read content and render Table

he updated data in the child component needs to be reflected in the parent component and potentially synchronized with the backend, it is generally considered a best practice to follow a unidirectional data flow. 
update the data in the parent component first, and then propagate the updated data to the backend if needed.
in table: updated data handle update data --> in Tab: backend updateData 

 ```sh
const ParentComponent: React.FC = () => {
  const [data, setData] = useState<string[]>([]);

  const handleDataUpdate = (updatedData: string[]) => {
    setData(updatedData);
    // Optionally, send updatedData to backend
    updateDataInBackend(updatedData);
  };

  const updateDataInBackend = (updatedData: string[]) => {
    // Call backend API to update data
    // ...
  };

  return (
    <div>
      <ChildComponent data={data} onDataUpdate={handleDataUpdate} />
    </div>
  );
};
 ```

```sh
 interface ChildComponentProps {
  data: string[];
  onDataUpdate: (updatedData: string[]) => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ data, onDataUpdate }) => {
  const [childData, setChildData] = useState<string[]>([]);

  const handleDataUpdate = () => {
    const updatedChildData = ['Updated', 'Data', 'From', 'Child'];
    setChildData(updatedChildData);
    onDataUpdate(updatedChildData); // Notify parent about the updated data
  };

  return (
    <div>
      {/* Render child component UI */}
      <button onClick={handleDataUpdate}>Update Data</button>
    </div>
  );
};

 ```