// NewspaperLayout.tsx (React Component)
export const NewspaperLayout = ({ children }) => (
  <div className="max-w-6xl mx-auto p-4 bg-[#f9f7f1] text-stone-900 font-serif">
    {/* Masthead */}
    <header className="border-b-4 border-black pb-4 mb-6 text-center">
      <h1 className="text-7xl font-black uppercase tracking-tighter">The MDX Gazette</h1>
      <div className="flex justify-between border-t border-black mt-2 py-1 text-sm uppercase font-sans font-bold">
        <span>Vol. LX — No. 2026</span>
        <span>Friday, January 16, 2026</span>
        <span>Price: $0.00</span>
      </div>
    </header>

    {/* The Newspaper Grid */}
    <main className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {children}
    </main>
  </div>
);
