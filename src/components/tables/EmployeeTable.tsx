import { Table } from '~/components/ui/Table'
import { useEmployees } from '~/contexts/EmployeeContext'
import { Employee } from '~/types'

export default function EmployeeTable() {
  const { employees, roleFilter, deleteEmployee, setEditingEmployee, isLoading } = useEmployees()
  
  const filteredEmployees = roleFilter
    ? employees.filter(employee => employee.role === roleFilter)
    : employees

  const columns = [
    {
      header: 'Name',
      accessorKey: (employee: Employee) => (
        <span className="text-gray-900 dark:text-steampunk-text">
          {employee.name}
        </span>
      )
    },
    {
      header: 'Role',
      accessorKey: 'role'
    },
    {
      header: 'Devices',
      accessorKey: (employee: Employee) => employee.devices.length.toString()
    }
  ]

  const actions = (employee: Employee) => (
    <>
      <button
        onClick={() => setEditingEmployee(employee)}
        className="text-sm font-medium text-blue-600 hover:text-blue-900 dark:text-steampunk-accent dark:hover:text-steampunk-hover"
      >
        Edit
      </button>
      <button
        onClick={() => deleteEmployee(employee.id)}
        className="text-sm font-medium text-red-600 hover:text-red-900 dark:text-steampunk-accent dark:hover:text-steampunk-hover"
      >
        Delete
      </button>
    </>
  )

  return (
    <Table
      data={filteredEmployees}
      columns={columns}
      actions={actions}
      emptyMessage="No employees found"
      isLoading={isLoading}
    />
  )
}
