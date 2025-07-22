
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-8">Page Not Found</h2>
      <p className="text-lg mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
        Go back to Home
      </Link>
    </div>
  );
}
