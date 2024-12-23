import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="mb-8 border-b border-gray-200 bg-white dark:border-steampunk-border dark:bg-steampunk-surface">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-900 dark:text-steampunk-text dark:hover:text-steampunk-accent"
        >
          Fleet Management
        </Link>
        <div className="space-x-4">
          <Link
            href="/employees"
            className="rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 
                     dark:text-steampunk-text dark:hover:bg-steampunk-hover dark:hover:text-steampunk-accent"
          >
            Employees
          </Link>
          <Link
            href="/devices"
            className="rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100
                     dark:text-steampunk-text dark:hover:bg-steampunk-hover dark:hover:text-steampunk-accent"
          >
            Devices
          </Link>
        </div>
      </div>
    </nav>
  );
}
