type Column<T> = {
  header: string
  accessorKey: ((item: T) => React.ReactNode)
  className?: string
}

type TableProps<T> = {
  data: T[]
  columns: Column<T>[]
  actions?: (item: T) => React.ReactNode
  emptyMessage?: string
  isLoading?: boolean
}

export function Table<T extends { id: string | number }>({ 
  data,
  columns,
  actions,
  emptyMessage = 'No items found',
  isLoading = false
}: TableProps<T>) {
  if (isLoading) {
    return (
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 ${column.className ?? ''}`}
                >
                  {column.header}
                </th>
              ))}
              {actions && (
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td 
                colSpan={columns.length + (actions ? 1 : 0)} 
                className="px-6 py-12 text-center"
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
                  <span className="text-sm text-gray-500">Loading...</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 ${column.className ?? ''}`}
              >
                {column.header}
              </th>
            ))}
            {actions && (
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              {columns.map((column, index) => (
                <td key={index} className="whitespace-nowrap px-6 py-4 text-gray-500">
                  {typeof column.accessorKey === 'function'
                    ? column.accessorKey(item)
                    : String(item[column.accessorKey])}
                </td>
              ))}
              {actions && (
                <td className="space-x-3 whitespace-nowrap px-6 py-4 text-right">
                  {actions(item)}
                </td>
              )}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td 
                colSpan={columns.length + (actions ? 1 : 0)} 
                className="px-6 py-4 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
} 