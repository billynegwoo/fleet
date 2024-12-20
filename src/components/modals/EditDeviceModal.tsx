import { useDevices } from "~/contexts/DeviceContext";
import { useEmployees } from "~/contexts/EmployeeContext";

const DEVICE_TYPES = ["Laptop", "Display", "Peripheral", "Phone"];

export default function EditDeviceModal() {
  const { editingDevice, setEditingDevice, updateDevice } = useDevices();
  const { employees } = useEmployees();

  if (!editingDevice) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    updateDevice(editingDevice.id, {
      name: formData.get("name") as string,
      type: formData.get("type") as string,
      employeeId: formData.get("employeeId")
        ? Number(formData.get("employeeId"))
        : null,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">Edit Device</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="edit-name" className="block text-sm font-medium">
              Device Name
            </label>
            <input
              type="text"
              id="edit-name"
              name="name"
              defaultValue={editingDevice.name}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="edit-type" className="block text-sm font-medium">
              Type
            </label>
            <select
              id="edit-type"
              name="type"
              defaultValue={editingDevice.type}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              {DEVICE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="edit-employeeId"
              className="block text-sm font-medium"
            >
              Assign to Employee
            </label>
            <select
              id="edit-employeeId"
              name="employeeId"
              defaultValue={editingDevice.employeeId ?? ""}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="">Unassigned</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setEditingDevice(null)}
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
