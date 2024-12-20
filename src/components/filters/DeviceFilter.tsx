import { useDevices } from "~/contexts/DeviceContext";

export default function DeviceFilter() {
  const { typeFilter, setTypeFilter } = useDevices();

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="deviceTypeFilter" className="text-sm font-medium">
        Filter by Type:
      </label>
      <select
        id="deviceTypeFilter"
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="rounded-md border border-gray-300 px-3 py-1"
      >
        <option value="">All Types</option>
        {["Laptop", "Display", "Peripheral", "Phone"].map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
