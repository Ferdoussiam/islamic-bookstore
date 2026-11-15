import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function BookDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  
  const book = await prisma.book.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!book) {
    return notFound();
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 mt-8">
      <Link href="/" className="text-emerald-600 font-medium hover:text-emerald-800 transition mb-8 inline-block">
        &larr; Back to Catalog
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Book Cover */}
        <div className="aspect-[3/4] bg-emerald-50 rounded-xl overflow-hidden flex items-center justify-center shadow-inner relative">
          {book.coverImage ? (
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="object-cover w-full h-full" 
            />
          ) : (
            <span className="text-emerald-800 font-serif text-2xl text-center px-4">
              {book.title}
            </span>
          )}
        </div>
        
        {/* Book Information */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {book.title}
            </h1>
            <p className="text-lg text-gray-500 mt-2 font-medium">Author: {book.author}</p>
          </div>
          
          <div className="text-4xl font-bold text-emerald-700">
            ${Number(book.price).toFixed(2)}
          </div>
          
          <div className="prose prose-emerald text-gray-700 leading-relaxed whitespace-pre-wrap">
            {book.description || "No description available for this authentic text."}
          </div>
          
          <div className="pt-6 border-t border-gray-100">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition shadow-md w-full md:w-auto text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}