import { type Employee } from "~/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

export async function fetchEmployees(): Promise<Employee[]> {
  const response = await fetch(`${API_BASE}/employees`);
  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }
  return response.json() as Promise<Employee[]>;
}

export async function createEmployee(data: {
  name: string;
  role: string;
}): Promise<Employee> {
  const response = await fetch(`${API_BASE}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create employee");
  }
  return response.json() as Promise<Employee>;
}

export async function deleteEmployee(id: number): Promise<void> {
  const response = await fetch(`${API_BASE}/employees/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete employee");
  }
}

export async function updateEmployee(
  id: number,
  data: { name: string; role: string }
): Promise<Employee> {
  const response = await fetch(`${API_BASE}/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update employee");
  }
  return response.json() as Promise<Employee>;
}
