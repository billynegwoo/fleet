import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, type ReactNode, useState } from "react";
import {
  createDevice,
  deleteDevice,
  fetchDevices,
  updateDevice,
} from "~/api/devices";
import { type Device } from "~/types";

interface DeviceContextType {
  devices: Device[];
  isLoading: boolean;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  createDevice: (data: {
    name: string;
    type: string;
    employeeId: number | null;
  }) => void;
  updateDevice: (
    id: number,
    data: { name: string; type: string; employeeId: number | null },
  ) => void;
  deleteDevice: (id: number) => void;
  editingDevice: Device | null;
  setEditingDevice: (device: Device | null) => void;
  deviceTypes: string[];
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export function DeviceProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  const { data: devices = [], isLoading } = useQuery({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });

  const [typeFilter, setTypeFilter] = useState("");
  const [editingDevice, setEditingDevice] = useState<Device | null>(null);

  const createMutation = useMutation<void, Error, { name: string; type: string; employeeId: number | null }>({
    mutationFn: async (data) => {
      await createDevice(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['devices'] });
      const form = document.getElementById("deviceForm") as HTMLFormElement;
      form?.reset();
    },
  });

  const updateMutation = useMutation<void, Error, { id: number; data: { name: string; type: string; employeeId: number | null } }>({
    mutationFn: async ({ id, data }) => {
      await updateDevice(id, data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['devices'] });
      setEditingDevice(null);
    },
  });

  const deleteMutation = useMutation<void, Error, number>({
    mutationFn: async (id) => {
      await deleteDevice(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["devices"] });
    },
  });

  const deviceTypes = ["Laptop", "Display", "Peripheral", "Phone"];

  const value = {
    devices,
    isLoading,
    typeFilter,
    setTypeFilter,
    createDevice: (data: { name: string; type: string; employeeId: number | null }) =>
      createMutation.mutate(data),
    updateDevice: (id: number, data: { name: string; type: string; employeeId: number | null }) =>
      updateMutation.mutate({ id, data }),
    deleteDevice: (id: number) => {
      if (confirm("Are you sure you want to delete this device?")) {
        deleteMutation.mutate(id);
      }
    },
    editingDevice,
    setEditingDevice,
    deviceTypes,
  };

  return (
    <DeviceContext.Provider value={value as DeviceContextType}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevices() {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error("useDevices must be used within a DeviceProvider");
  }
  return context;
}
