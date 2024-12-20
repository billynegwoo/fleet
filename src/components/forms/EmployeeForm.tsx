import { useEmployees } from "~/contexts/EmployeeContext";

export default function EmployeeForm() {
  const { createEmployee, employeeRoles } = useEmployees();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    createEmployee({
      name: formData.get("name") as string,
      role: formData.get("role") as string,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="employeeForm"
      className="rounded-lg border bg-white p-4"
    >
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 px-3"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="role" className="block text-sm font-medium">
            Role
          </label>
          <select
            name="role"
            id="role"
            required
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 px-3"
          >
            <option value="">Select a role...</option>
            {employeeRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="h-10 rounded-md bg-blue-600 px-4 text-white hover:bg-blue-700"
        >
          Add Employee
        </button>
      </div>
    </form>
  );
}
