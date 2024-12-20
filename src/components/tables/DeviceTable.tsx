import { useDevices } from "~/contexts/DeviceContext";

export default function DeviceTable() {
  const { devices, typeFilter, setEditingDevice, deleteDevice } = useDevices();
  const filteredDevices = typeFilter
    ? devices.filter(device => device.type === typeFilter)
    : devices;

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Assigned To
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {filteredDevices.map((device) => (
            <tr key={device.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4">
                <div className="font-medium text-gray-900">{device.name}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                {device.type}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                {device.employee?.name ?? "Unassigned"}
              </td>
              <td className="space-x-3 whitespace-nowrap px-6 py-4 text-right">
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
              </td>
            </tr>
          ))}
          {filteredDevices.length === 0 && (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                No devices found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
