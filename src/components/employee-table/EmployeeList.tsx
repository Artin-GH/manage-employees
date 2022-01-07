import Pagination from './Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import EmployeeItem from './EmployeeItem';
import { Modal, Toast } from 'react-bootstrap';
import AddEmployeeModalForm from './AddEmployeeModalForm';
import { useEffect, useState } from 'react';
import { Employee } from '../../types';
import EditEmployeeModalForm from './EditEmployeeModalForm';
import { setTimeout } from 'timers';
import { keys } from '../../constants';

let updated = false;

export default function EmployeeList() {
  const employees = useSelector((state: RootState) => state.employee.employees);

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddModalShow = () => {
    setShowAddModal(true);
  };
  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditModalShow = () => {
    setShowEditModal(true);
  };
  const handleEditModalClose = () => {
    setShowEditModal(false);
  };
  const [clickedEmployee, setClickedEmployee] = useState({
    id: -1,
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const edit = (employee: Employee) => {
    setClickedEmployee(employee);
    handleEditModalShow();
  };

  const [showToast, setShowToast] = useState(false);
  const handleToastShow = () => {
    setShowToast(true);
  };
  const handleToastClose = () => {
    setShowToast(false);
  };
  useEffect(() => {
    if (updated) {
      localStorage.setItem(keys.employees, JSON.stringify(employees));
      handleToastClose();
      handleToastShow();
      setTimeout(() => {
        handleToastClose();
      }, 2000);
    } else {
      updated = true;
    }
  }, [employees]);

  const [page, setPage] = useState(0);
  const maxEmployeeCount = 5;
  const pageEmployees = employees.slice(
    page * maxEmployeeCount,
    page * maxEmployeeCount + maxEmployeeCount
  );

  return (
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-success" onClick={handleAddModalShow}>
              <i className="material-icons">&#xE147;</i>{' '}
              <span>Add New Employee</span>
            </button>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pageEmployees.map((employee, i) => (
            <EmployeeItem employee={employee} edit={edit} key={i} />
          ))}
        </tbody>
      </table>
      <Pagination
        employees={employees}
        pageEmployees={pageEmployees}
        maxPageEmployeesLen={maxEmployeeCount}
        pageState={[page, setPage]}
      />
      <Modal show={showAddModal} onHide={handleAddModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <AddEmployeeModalForm handleClose={handleAddModalClose} />
      </Modal>
      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <EditEmployeeModalForm
          {...clickedEmployee}
          handleClose={handleEditModalClose}
        />
      </Modal>
      <Toast
        show={showToast}
        onClose={handleToastClose}
        style={{ position: 'absolute', right: 30, bottom: 30, width: 300 }}
      >
        <Toast.Header>
          <img src="" alt="" />
          <strong className="mr-auto">Information</strong>
          <span style={{ fontSize: '.85em' }}>success</span>
        </Toast.Header>
        <Toast.Body>Employee list updated successfuly</Toast.Body>
      </Toast>
    </div>
  );
}
