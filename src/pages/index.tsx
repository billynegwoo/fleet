'use client'

import Layout from '~/components/layout/Layout'
import Link from 'next/link'
import { useEmployees } from '~/contexts/EmployeeContext'
import { useDevices } from '~/contexts/DeviceContext'
import { Users, Laptop } from 'lucide-react'

export default function HomePage() {
  const { count: employeeCount } = useEmployees()
  const { count: deviceCount } = useDevices()

  return (
    <Layout title="Home">
      <div className="mx-auto max-w-4xl px-4 py-8 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-steampunk-text">
          Fleet Management System
        </h1>
        
        <p className="mb-8 text-xl text-gray-600 dark:text-steampunk-text/80">
          Streamline your company's resource management with our comprehensive solution
        </p>

        {/* Stats/Overview Section */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { label: 'Total Employees', value: employeeCount },
            { label: 'Devices Managed', value: deviceCount },
          ].map((stat) => (
            <div 
              key={stat.label} 
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm 
                       dark:border-steampunk-border dark:bg-steampunk-surface"
            >
              <dt className="text-sm font-medium text-gray-600 dark:text-steampunk-text/80">
                {stat.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-steampunk-text">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-x-4">
          <Link
            href="/employees"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white 
                     transition hover:bg-blue-700 dark:bg-steampunk-primary 
                     dark:text-steampunk-text dark:hover:bg-steampunk-hover"
          >
            <Users className="mr-2 h-5 w-5" />
            Manage Employees
          </Link>
          <Link
            href="/devices"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white 
                     transition hover:bg-blue-700 dark:bg-steampunk-primary 
                     dark:text-steampunk-text dark:hover:bg-steampunk-hover"
          >
            <Laptop className="mr-2 h-5 w-5" />
            Manage Devices
          </Link>
        </div>
      </div>
    </Layout>
  )
}
