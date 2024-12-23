interface FilterProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  id: string
}

export function Filter({ label, value, onChange, options, id }: FilterProps) {
  return (
    <div className="flex items-center space-x-4">
      <label 
        htmlFor={id} 
        className="text-sm font-medium text-gray-700 dark:text-steampunk-text"
      >
        {label}:
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-gray-900
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                 dark:border-steampunk-border dark:bg-steampunk-background 
                 dark:text-steampunk-text dark:focus:ring-steampunk-accent 
                 dark:focus:ring-offset-steampunk-background"
      >
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-white text-gray-900 dark:bg-steampunk-background dark:text-steampunk-text"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
} 