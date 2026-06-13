const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'David Lee', email: 'david@example.com', role: 'Editor', status: 'Active' },
]

export function Users() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {['Name', 'Email', 'Role', 'Status', 'Actions'].map(h => (
                <th key={h} className="text-left px-6 py-3 font-medium text-gray-500 dark:text-gray-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4 text-gray-500">{user.email}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs">{user.role}</span></td>
                <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs ${user.status === 'Active' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-500'}`}>{user.status}</span></td>
                <td className="px-6 py-4"><button className="text-blue-600 hover:underline text-xs">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
