import Link from 'next/link';
import  {prisma}  from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <section className="bg-emerald-800 text-white rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Authentic Knowledge for Every Home
          </h1>
          <p className="text-emerald-100 text-lg">
            Explore our curated collection of classic and contemporary Islamic literature, Seerah, Tafsir, and Fiqh.
          </p>
        </div>
      </section>

      {/* Book Catalog Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Books</h2>
          <span className="text-sm text-gray-500">{books.length} titles available</span>
        </div>

        {books.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500">No books found in the database yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
             <Link
  key={book.id}
  href={`/books/${book.id}`}
  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
>
              >
                <div className="aspect-[3/4] bg-emerald-50 relative overflow-hidden flex items-center justify-center p-4">
                  {book.coverImage ? (
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <span className="text-emerald-800 font-serif font-semibold text-lg line-clamp-3">
                        {book.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition line-clamp-1">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{book.author}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="font-bold text-emerald-700 text-lg">
                      ${Number(book.price).toFixed(2)}
                    </span>
                    <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}