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
        className="rounded-md border border-gray-300 px-3 py-1.5 
                 dark:border-steampunk-border dark:bg-steampunk-background 
                 dark:text-steampunk-text focus:border-steampunk-accent 
                 focus:ring-steampunk-accent"
      >
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            className="dark:bg-steampunk-background"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
} 