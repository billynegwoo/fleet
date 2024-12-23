import Layout from "~/components/layout/Layout";
import EmployeeTable from "~/components/tables/EmployeeTable";
import EditEmployeeModal from "~/components/modals/EditEmployeeModal";
import EmployeeForm from "~/components/forms/EmployeeForm";
import EmployeeFilter from "~/components/filters/EmployeeFilter";
import { useEmployees } from "~/contexts/EmployeeContext";

export default function EmployeesPage() {
  const { editingEmployee } = useEmployees();

  return (
    <Layout title="Employees">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Employees</h2>
        <EmployeeForm />
        <EmployeeFilter />
        <EmployeeTable />
        {editingEmployee && <EditEmployeeModal />}
      </div>
    </Layout>
  );
}
