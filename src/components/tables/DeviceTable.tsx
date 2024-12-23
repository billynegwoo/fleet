import { Table } from '~/components/ui/Table'
import { useDevices } from '~/contexts/DeviceContext'
import { Device } from '~/types'

export default function DeviceTable() {
  const { devices, typeFilter, setEditingDevice, deleteDevice, isLoading } = useDevices()
  
  const filteredDevices = typeFilter
    ? devices.filter(device => device.type === typeFilter)
    : devices

  const columns = [
    {
      header: 'Name',
      accessorKey: (device: Device) => (
        <span className="text-gray-900 dark:text-steampunk-text">
          {device.name}
        </span>
      )
    },
    {
      header: 'Type',
      accessorKey: 'type'
    },
    {
      header: 'Assigned To',
      accessorKey: (device: Device) => device.employee?.name ?? 'Unassigned'
    }
  ]

  const actions = (device: Device) => (
    <>
      <button
        onClick={() => setEditingDevice(device)}
        className="text-sm font-medium text-blue-600 hover:text-blue-900 dark:text-steampunk-accent dark:hover:text-steampunk-hover"
      >
        Edit
      </button>
      <button
        onClick={() => deleteDevice(device.id)}
        className="text-sm font-medium text-red-600 hover:text-red-900 dark:text-steampunk-accent dark:hover:text-steampunk-hover"
      >
        Delete
      </button>
    </>
  )

  return (
    <Table
      data={filteredDevices}
      columns={columns}
      actions={actions}
      emptyMessage="No devices found"
      isLoading={isLoading}
    />
  )
}
