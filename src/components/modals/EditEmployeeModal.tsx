import Modal from '~/components/ui/Modal'
import { useEmployees } from '~/contexts/EmployeeContext'

const EMPLOYEE_ROLES = ['Developer', 'Designer', 'Manager', 'HR']

export default function EditEmployeeModal() {
  const { editingEmployee, setEditingEmployee, updateEmployee } = useEmployees()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    updateEmployee(editingEmployee!.id, {
      name: formData.get('name') as string,
      role: formData.get('role') as string
    })
  }

  return (
    <Modal
      isOpen={!!editingEmployee}
      onClose={() => setEditingEmployee(null)}
      title="Edit Employee"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="edit-name" className="block text-sm font-medium">
            Employee Name
          </label>
          <input
            type="text"
            id="edit-name"
            name="name"
            defaultValue={editingEmployee?.name}
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
            defaultValue={editingEmployee?.role}
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
    </Modal>
  )
}
