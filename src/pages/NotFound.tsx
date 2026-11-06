import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">Page not found.</p>
      <Link to="/" className="mt-4 inline-block text-blue-600 underline">Go home</Link>
    </main>
  )
}
