import Modal from '~/components/ui/Modal'
import { useDevices } from '~/contexts/DeviceContext'
import { useEmployees } from '~/contexts/EmployeeContext'

const DEVICE_TYPES = ['Laptop', 'Display', 'Peripheral', 'Phone']

export default function EditDeviceModal() {
  const { editingDevice, setEditingDevice, updateDevice } = useDevices()
  const { employees } = useEmployees()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    updateDevice(editingDevice!.id, {
      name: formData.get('name') as string,
      type: formData.get('type') as string,
      employeeId: formData.get('employeeId')
        ? Number(formData.get('employeeId'))
        : null,
    })
  }

  return (
    <Modal
      isOpen={!!editingDevice}
      onClose={() => setEditingDevice(null)}
      title="Edit Device"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700 dark:text-steampunk-text">
            Device Name
          </label>
          <input
            type="text"
            id="edit-name"
            name="name"
            defaultValue={editingDevice?.name}
            required
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     dark:border-steampunk-border dark:bg-steampunk-background 
                     dark:text-steampunk-text dark:focus:ring-steampunk-accent 
                     dark:focus:ring-offset-steampunk-background"
          />
        </div>

        <div>
          <label htmlFor="edit-type" className="block text-sm font-medium text-gray-700 dark:text-steampunk-text">
            Type
          </label>
          <select
            id="edit-type"
            name="type"
            defaultValue={editingDevice?.type}
            required
            className="mt-1 block h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     dark:border-steampunk-border dark:bg-steampunk-background 
                     dark:text-steampunk-text dark:focus:ring-steampunk-accent 
                     dark:focus:ring-offset-steampunk-background"
          >
            {DEVICE_TYPES.map((type) => (
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

        <div>
          <label htmlFor="edit-employeeId" className="block text-sm font-medium text-gray-700 dark:text-steampunk-text">
            Assign to Employee
          </label>
          <select
            id="edit-employeeId"
            name="employeeId"
            defaultValue={editingDevice?.employeeId ?? ''}
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

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => setEditingDevice(null)}
            className="rounded-md border px-4 py-2 hover:bg-gray-50 dark:border-steampunk-border dark:hover:bg-steampunk-background"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-steampunk-primary dark:text-steampunk-text dark:hover:bg-steampunk-hover"
          >
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  )
}
