import { Employee, EmployeeAction, EmployeeActionType } from '../../types';

export function addEmployee(employee: Employee): EmployeeAction {
  return {
    type: EmployeeActionType.ADD_EMPLOYEE,
    employee,
  };
}

export function editEmployee(employee: Employee): EmployeeAction {
  return {
    type: EmployeeActionType.EDIT_EMPLOYEE,
    employee,
  };
}

export function deleteEmployee(employee: Employee): EmployeeAction {
  return {
    type: EmployeeActionType.DELETE_EMPLOYEE,
    employee,
  };
}
