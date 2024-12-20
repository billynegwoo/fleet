import Layout from "~/components/layout/Layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout title="Home">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold">Welcome to Fleet Management</h2>
        <p className="mb-8 text-gray-600">
          Manage your company&apos;s employees and devices in one place.
        </p>
        <div className="space-x-4">
          <Link
            href="/employees"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Manage Employees
          </Link>
          <Link
            href="/devices"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Manage Devices
          </Link>
        </div>
      </div>
    </Layout>
  );
}
