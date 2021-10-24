import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { deleteEmployee } from '../../store/actions/employeeActions';
import { Employee } from '../../types';

export default function EmployeeItem(props: {
  employee: Employee;
  edit: (employee: Employee) => void;
}) {
  const { employee } = props;
  const dispatch: AppDispatch = useDispatch();

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}>
          <div className="edit" onClick={() => props.edit(employee)}>
            <i className="material-icons">&#xE254;</i>
          </div>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}>
          <div
            className="delete"
            onClick={() => {
              dispatch(deleteEmployee(employee));
            }}
          >
            <i className="material-icons">&#xE872;</i>
          </div>
        </OverlayTrigger>
      </td>
    </tr>
  );
}
