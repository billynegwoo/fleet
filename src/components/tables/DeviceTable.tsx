import { Table } from '~/components/ui/Table'
import { useDevices } from '~/contexts/DeviceContext'
import { Device } from '~/types'

export default function DeviceTable() {
  const { devices, typeFilter, setEditingDevice, deleteDevice } = useDevices()
  
  const filteredDevices = typeFilter
    ? devices.filter(device => device.type === typeFilter)
    : devices

  const columns = [
    {
      header: 'Name',
      accessorKey: (device: Device) => (
        <div className="font-medium text-gray-900">{device.name}</div>
      )
    },
    {
      header: 'Type',
      accessorKey: (device: Device) => device.type
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
        className="text-sm font-medium text-blue-600 hover:text-blue-900"
      >
        Edit
      </button>
      <button
        onClick={() => deleteDevice(device.id)}
        className="text-sm font-medium text-red-600 hover:text-red-900"
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
    />
  )
}
