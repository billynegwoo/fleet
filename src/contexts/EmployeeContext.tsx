import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, type ReactNode, useState } from "react";
import {
  createEmployee,
  deleteEmployee,
  fetchEmployees,
  updateEmployee,
} from "~/api/employees";
import { type Employee } from "~/types";

interface EmployeeContextType {
  employees: Employee[];
  isLoading: boolean;
  roleFilter: string;
  setRoleFilter: (role: string) => void;
  createEmployee: (data: { name: string; role: string }) => void;
  updateEmployee: (id: number, data: { name: string; role: string }) => void;
  deleteEmployee: (id: number) => void;
  editingEmployee: Employee | null;
  setEditingEmployee: (employee: Employee | null) => void;
  employeeRoles: string[];
  refetch: () => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined,
);

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  const { data: employees = [], isLoading, refetch } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  const [roleFilter, setRoleFilter] = useState("");
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const createMutation = useMutation<void, Error, { name: string; role: string }>({
    mutationFn: async (data) => {
      await createEmployee(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["employees"] });
      const form = document.getElementById("employeeForm") as HTMLFormElement;
      form?.reset();
    },
  });

  const updateMutation = useMutation<void, Error, { id: number; data: { name: string; role: string } }>({
    mutationFn: async ({ id, data }) => {
      await updateEmployee(id, data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["employees"] });
      setEditingEmployee(null);
    },
  });

  const deleteMutation = useMutation<void, Error, number>({
    mutationFn: async (id) => {
      await deleteEmployee(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const employeeRoles = ["Developer", "Designer", "Manager", "HR"];

  const value = {
    employees,
    isLoading,
    roleFilter,
    setRoleFilter,
    createEmployee: (data: { name: string; role: string }) => createMutation.mutate(data),
    updateEmployee: (id: number, data: { name: string; role: string }) => updateMutation.mutate({ id, data }),
    deleteEmployee: (id: number) => {
      if (confirm("Are you sure you want to delete this employee?")) {
        deleteMutation.mutate(id);
      }
    },
    editingEmployee,
    setEditingEmployee,
    employeeRoles,
    refetch,
  };

  return (
    <EmployeeContext.Provider value={value as EmployeeContextType}>
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error("useEmployees must be used within an EmployeeProvider");
  }
  return context;
}
