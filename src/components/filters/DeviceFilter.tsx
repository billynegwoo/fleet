import { useDevices } from "~/contexts/DeviceContext";
import { Filter } from "~/components/ui/Filter";

const DEVICE_TYPES = [
  { value: '', label: 'All Types' },
  { value: 'Laptop', label: 'Laptop' },
  { value: 'Display', label: 'Display' },
  { value: 'Peripheral', label: 'Peripheral' },
  { value: 'Phone', label: 'Phone' }
];

export default function DeviceFilter() {
  const { typeFilter, setTypeFilter } = useDevices();

  return (
    <Filter
      id="deviceTypeFilter"
      label="Filter by Type"
      value={typeFilter}
      onChange={setTypeFilter}
      options={DEVICE_TYPES}
    />
  );
}
