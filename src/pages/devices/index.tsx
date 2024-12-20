import Layout from "~/components/layout/Layout";
import DeviceTable from "~/components/tables/DeviceTable";
import EditDeviceModal from "~/components/modals/EditDeviceModal";
import DeviceForm from "~/components/forms/DeviceForm";
import DeviceFilter from "~/components/filters/DeviceFilter";
import { useDevices } from "~/contexts/DeviceContext";

export default function DevicesPage() {
  const { isLoading, editingDevice } = useDevices();

  return (
    <Layout title="Devices">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Devices</h2>
        <DeviceForm />
        <DeviceFilter />
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <DeviceTable />
        )}
        {editingDevice && <EditDeviceModal />}
      </div>
    </Layout>
  );
}
