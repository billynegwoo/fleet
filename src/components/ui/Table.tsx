type Column<T> = {
  header: string
  accessorKey: ((item: T) => React.ReactNode) | string
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
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-steampunk-border">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-steampunk-border">
          <thead className="bg-gray-50 dark:bg-steampunk-surface">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-steampunk-text ${column.className ?? ''}`}
                >
                  {column.header}
                </th>
              ))}
              {actions && (
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-steampunk-text">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-steampunk-border dark:bg-steampunk-background">
            <tr>
              <td 
                colSpan={columns.length + (actions ? 1 : 0)} 
                className="px-6 py-12 text-center"
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 dark:border-steampunk-border dark:border-t-steampunk-accent" />
                  <span className="text-sm text-gray-500 dark:text-steampunk-text">Loading...</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-steampunk-border">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-steampunk-border">
        <thead className="bg-gray-50 dark:bg-steampunk-surface">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-steampunk-text ${column.className ?? ''}`}
              >
                {column.header}
              </th>
            ))}
            {actions && (
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-steampunk-text">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white dark:divide-steampunk-border dark:bg-steampunk-background">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-steampunk-surface">
              {columns.map((column, index) => (
                <td key={index} className="whitespace-nowrap px-6 py-4 text-gray-900 dark:text-steampunk-text">
                  {typeof column.accessorKey === 'function'
                    ? column.accessorKey(item)
                    : (item as any)[column.accessorKey]}
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
                className="px-6 py-4 text-center text-gray-500 dark:text-steampunk-text"
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