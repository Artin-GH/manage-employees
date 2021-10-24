import EmployeeList from './components/employee-table/EmployeeList';
import './styles.css';

export default function App() {
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <EmployeeList />
        </div>
      </div>
    </>
  );
}
