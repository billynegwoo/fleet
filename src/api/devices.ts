import { type Device } from "~/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

export async function fetchDevices(): Promise<Device[]> {
  const response = await fetch(`${API_BASE}/devices`);
  if (!response.ok) {
    throw new Error("Failed to fetch devices");
  }
  return response.json() as Promise<Device[]>;
}

export async function createDevice(data: {
  name: string;
  type: string;
  employeeId: number | null;
}): Promise<Device> {
  const response = await fetch(`${API_BASE}/devices`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create device");
  }
  return response.json() as Promise<Device>;
}

export async function deleteDevice(id: number): Promise<void> {
  const response = await fetch(`${API_BASE}/devices/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete device");
  }
}

export async function updateDevice(
  id: number,
  data: { name: string; type: string; employeeId: number | null }
): Promise<Device> {
  const response = await fetch(`${API_BASE}/devices/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update device");
  }
  return response.json() as Promise<Device>;
}

export async function fetchDeviceCount(): Promise<{ count: number }> {
  const response = await fetch(`${API_BASE}/devices/count`);
  if (!response.ok) {
    throw new Error("Failed to fetch device count");
  }
  return response.json() as Promise<{ count: number }>;
}
