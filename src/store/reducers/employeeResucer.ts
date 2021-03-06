import { keys } from '../../constants';
import { EmployeeAction, EmployeeActionType, EmployeeState } from '../../types';

const initialState: EmployeeState = {
  employees: JSON.parse(localStorage.getItem(keys.employees) || '[]'),
};

export default function employeeReducer(
  state: EmployeeState = initialState,
  action: EmployeeAction
): EmployeeState {
  switch (action.type) {
    case EmployeeActionType.ADD_EMPLOYEE:
      return { ...state, employees: state.employees.concat(action.employee) };
    case EmployeeActionType.EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.employee.id ? action.employee : emp
        ),
      };
    case EmployeeActionType.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.id !== action.employee.id
        ),
      };
    default:
      return state;
  }
}
