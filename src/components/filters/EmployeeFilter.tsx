import { useEmployees } from "~/contexts/EmployeeContext";
import { Filter } from "~/components/ui/Filter";

const EMPLOYEE_ROLES = [
  { value: '', label: 'All Roles' },
  { value: 'Developer', label: 'Developer' },
  { value: 'Designer', label: 'Designer' },
  { value: 'Manager', label: 'Manager' },
  { value: 'HR', label: 'HR' }
];

export default function EmployeeFilter() {
  const { roleFilter, setRoleFilter } = useEmployees();

  return (
    <Filter
      id="roleFilter"
      label="Filter by Role"
      value={roleFilter}
      onChange={setRoleFilter}
      options={EMPLOYEE_ROLES}
    />
  );
}
