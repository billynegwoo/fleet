import { useEmployees } from "~/contexts/EmployeeContext";

const EMPLOYEE_ROLES = ["Developer", "Designer", "Manager", "HR"];

export default function EmployeeFilter() {
  const { roleFilter, setRoleFilter } = useEmployees();

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="roleFilter" className="text-sm font-medium">
        Filter by Role:
      </label>
      <select
        id="roleFilter"
        value={roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
        className="h-10 rounded-md border border-gray-300 px-3"
      >
        <option value="">All Roles</option>
        {EMPLOYEE_ROLES.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}
