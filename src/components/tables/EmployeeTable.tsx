import { useEmployees } from "~/contexts/EmployeeContext";

export default function EmployeeTable() {
  const { employees, roleFilter, deleteEmployee, setEditingEmployee } = useEmployees();
  
  const filteredEmployees = roleFilter
    ? employees.filter(employee => employee.role === roleFilter)
    : employees;

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Devices
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {filteredEmployees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4">
                <div className="font-medium text-gray-900">{employee.name}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                {employee.role}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                {employee.devices.length}
              </td>
              <td className="space-x-3 whitespace-nowrap px-6 py-4 text-right">
                <button
                  onClick={() => setEditingEmployee(employee)}
                  className="text-sm font-medium text-blue-600 hover:text-blue-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEmployee(employee.id)}
                  className="text-sm font-medium text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredEmployees.length === 0 && (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
