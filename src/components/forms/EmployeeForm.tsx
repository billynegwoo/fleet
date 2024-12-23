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
      className="rounded-lg border border-gray-200 bg-white p-4 dark:border-steampunk-border dark:bg-steampunk-surface"
    >
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 dark:text-steampunk-text"
          >
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
                     dark:focus:ring-offset-steampunk-background
                     placeholder:text-gray-400 dark:placeholder:text-steampunk-text/50"
            placeholder="Employee name"
          />
        </div>

        <div className="flex-1">
          <label 
            htmlFor="role" 
            className="block text-sm font-medium text-gray-700 dark:text-steampunk-text"
          >
            Role
          </label>
          <select
            name="role"
            id="role"
            required
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     dark:border-steampunk-border dark:bg-steampunk-background 
                     dark:text-steampunk-text dark:focus:ring-steampunk-accent 
                     dark:focus:ring-offset-steampunk-background"
          >
            <option value="" className="bg-white text-gray-900 dark:bg-steampunk-background dark:text-steampunk-text">Select a role...</option>
            {employeeRoles.map((role) => (
              <option 
                key={role} 
                value={role}
                className="bg-white text-gray-900 dark:bg-steampunk-background dark:text-steampunk-text"
              >
                {role}
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
          Add Employee
        </button>
      </div>
    </form>
  );
}
