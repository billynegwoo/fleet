'use client'

import Layout from '~/components/layout/Layout'
import Link from 'next/link'
import { useEmployees } from '~/contexts/EmployeeContext'
import { useDevices } from '~/contexts/DeviceContext'

export default function HomePage() {
  const { count: employeeCount } = useEmployees()
  const { count: deviceCount } = useDevices()

  return (
    <Layout title="Home">
      <div className="mx-auto max-w-4xl px-4 py-8 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
          Fleet Management System
        </h1>
        
        <p className="mb-8 text-xl text-gray-600">
          Streamline your company's resource management with our comprehensive solution
        </p>

        {/* Stats/Overview Section */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { label: 'Total Employees', value: employeeCount },
            { label: 'Devices Managed', value: deviceCount },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white p-6 shadow-sm">
              <dt className="text-sm font-medium text-gray-600">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-x-4">
          <Link
            href="/employees"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Manage Employees
          </Link>
          <Link
            href="/devices"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Manage Devices
          </Link>
        </div>
      </div>
    </Layout>
  )
}
