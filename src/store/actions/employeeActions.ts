import { Employee, EmployeeAction, EmployeeActions } from '../../types';

export function addEmployee(employee: Employee): EmployeeAction {
  return {
    type: EmployeeActions.ADD_EMPLOYEE,
    employee,
  };
}

export function editEmployee(employee: Employee): EmployeeAction {
  return {
    type: EmployeeActions.EDIT_EMPLOYEE,
    employee,
  };
}

export function deleteEmployee(employee: Employee): EmployeeAction {
  return {
    type: EmployeeActions.DELETE_EMPLOYEE,
    employee,
  };
}
