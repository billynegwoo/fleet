import { useDevices } from "~/contexts/DeviceContext";
import { useEmployees } from "~/contexts/EmployeeContext";

export default function DeviceForm() {
  const { employees } = useEmployees();
  const { createDevice } = useDevices();

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
      className="rounded-lg border border-gray-200 bg-white p-4 dark:border-steampunk-border dark:bg-steampunk-surface"
    >
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-steampunk-text">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     dark:border-steampunk-border dark:bg-steampunk-background 
                     dark:text-steampunk-text dark:focus:ring-steampunk-accent 
                     dark:focus:ring-offset-steampunk-background"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-steampunk-text">
            Type
          </label>
          <select
            name="type"
            id="type"
            required
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     dark:border-steampunk-border dark:bg-steampunk-background 
                     dark:text-steampunk-text dark:focus:ring-steampunk-accent 
                     dark:focus:ring-offset-steampunk-background"
          >
            <option value="" className="bg-white text-gray-900 dark:bg-steampunk-background dark:text-steampunk-text">Select a type...</option>
            {['Laptop', 'Display', 'Peripheral', 'Phone'].map((type) => (
              <option 
                key={type} 
                value={type}
                className="bg-white text-gray-900 dark:bg-steampunk-background dark:text-steampunk-text"
              >
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 dark:text-steampunk-text">
            Assign to Employee
          </label>
          <select
            name="employeeId"
            id="employeeId"
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     dark:border-steampunk-border dark:bg-steampunk-background 
                     dark:text-steampunk-text dark:focus:ring-steampunk-accent 
                     dark:focus:ring-offset-steampunk-background"
          >
            <option value="" className="bg-white text-gray-900 dark:bg-steampunk-background dark:text-steampunk-text">Unassigned</option>
            {employees.map((employee) => (
              <option 
                key={employee.id} 
                value={employee.id}
                className="bg-white text-gray-900 dark:bg-steampunk-background dark:text-steampunk-text"
              >
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="h-10 rounded-md bg-blue-600 px-4 text-white transition-colors
                   hover:bg-blue-700 dark:bg-steampunk-primary dark:text-steampunk-text
                   dark:hover:bg-steampunk-hover"
        >
          Add Device
        </button>
      </div>
    </form>
  );
}
