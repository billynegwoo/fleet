import { useDevices } from "~/contexts/DeviceContext";
import { useEmployees } from "~/contexts/EmployeeContext";

export default function DeviceForm() {
  const { createDevice, deviceTypes } = useDevices();
  const { employees } = useEmployees();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    createDevice({
      name: formData.get("name") as string,
      type: formData.get("type") as string,
      employeeId: formData.get("employeeId")
        ? Number(formData.get("employeeId"))
        : null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="deviceForm"
      className="rounded-lg border bg-white p-4"
    >
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium">
            Device Name
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
          <label htmlFor="type" className="block text-sm font-medium">
            Type
          </label>
          <select
            name="type"
            id="type"
            required
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 px-3"
          >
            <option value="">Select a type...</option>
            {deviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="employeeId" className="block text-sm font-medium">
            Assign to Employee
          </label>
          <select
            name="employeeId"
            id="employeeId"
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 px-3"
          >
            <option value="">Unassigned</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="h-10 rounded-md bg-blue-600 px-4 text-white hover:bg-blue-700"
        >
          Add Device
        </button>
      </div>
    </form>
  );
}
