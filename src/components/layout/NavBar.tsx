import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="mb-8 border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          Fleet Management
        </Link>
        <div className="space-x-4">
          <Link
            href="/employees"
            className="rounded-md px-4 py-2 hover:bg-gray-100"
          >
            Employees
          </Link>
          <Link
            href="/devices"
            className="rounded-md px-4 py-2 hover:bg-gray-100"
          >
            Devices
          </Link>
        </div>
      </div>
    </nav>
  );
}
