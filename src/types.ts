export interface Employee {
  id: number;
  name: string;
  role: string;
  devices: Device[];
}

export interface Device {
  id: number;
  name: string;
  type: string;
  employeeId: number | null;
  employee?: Employee;
}
