export type Employee = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
};
export enum EmployeeActionType {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
}
export type EmployeeAction = {
  type: EmployeeActionType;
  employee: Employee;
};
export type EmployeeState = {
  employees: Employee[];
};
