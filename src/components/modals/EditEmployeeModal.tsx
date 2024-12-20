import { useEmployees } from "~/contexts/EmployeeContext";

const EMPLOYEE_ROLES = ["Developer", "Designer", "Manager", "HR"];

export default function EditEmployeeModal() {
  const { editingEmployee, setEditingEmployee, updateEmployee } =
    useEmployees();

  if (!editingEmployee) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    updateEmployee(editingEmployee.id, {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">Edit Employee</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="edit-name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="edit-name"
              name="name"
              defaultValue={editingEmployee.name}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="edit-role" className="block text-sm font-medium">
              Role
            </label>
            <select
              id="edit-role"
              name="role"
              defaultValue={editingEmployee.role}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              {EMPLOYEE_ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setEditingEmployee(null)}
              className="rounded-md border px-4 py-2 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
