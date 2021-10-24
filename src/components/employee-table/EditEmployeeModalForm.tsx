import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { editEmployee } from '../../store/actions/employeeActions';
import { Employee } from '../../types';

export default function EditEmployeeModalForm(
  props: Employee & {
    handleClose: () => void;
  }
) {
  const dispatch: AppDispatch = useDispatch();
  const [employee, setEmployee] = useState({
    id: props.id,
    name: props.name,
    email: props.email,
    address: props.address,
    phone: props.phone,
  });
  const { name, email, address, phone } = employee;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    dispatch(editEmployee(employee));
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
        <Button variant="info" type="submit">
          Edit
        </Button>
      </Modal.Footer>
    </Form>
  );
}
