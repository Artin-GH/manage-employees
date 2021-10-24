import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { addEmployee } from '../../store/actions/employeeActions';

export default function AddEmployeeModalForm(props: {
  handleClose: () => void;
}) {
  const dispatch: AppDispatch = useDispatch();
  const ids = useSelector((state: RootState) => state.employee.employees).map(
    (emp) => emp.id
  );
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const { name, email, address, phone } = newEmployee;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    dispatch(addEmployee({ ...newEmployee, id: ids.length > 0 ? Math.max(...ids) + 1 : 0 }));
    props.handleClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Modal.Body>
        <Form.Group>
          <label>Name</label>
          <Form.Control
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            autoComplete="none"
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group>
          <label>Email</label>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            autoComplete="none"
            required
          />
        </Form.Group>
        <Form.Group>
          <label>Address</label>
          <Form.Control
            name="address"
            value={address}
            onChange={handleChange}
            autoComplete="none"
            as="textarea"
            required
          />
        </Form.Group>
        <Form.Group>
          <label>Phone</label>
          <Form.Control
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            autoComplete="none"
            required
          />
        </Form.Group>
        <input style={{ display: 'none' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button variant="success" type="submit">
          Add
        </Button>
      </Modal.Footer>
    </Form>
  );
}
