export type Employee = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
};
export enum EmployeeActions {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
}
export type EmployeeAction = {
  type: EmployeeActions;
  employee: Employee;
};
export type EmployeeState = {
  employees: Employee[];
};
