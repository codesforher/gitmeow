export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1115] flex items-center justify-center px-6">
      <div className="w-full max-w-4xl rounded-3xl border border-[#2B313C] bg-[#171B22] p-10 shadow-2xl">
        <div className="text-center">
          <div className="text-7xl mb-4">🐈</div>

          <h1 className="text-6xl font-extrabold tracking-tight text-white">
            gitmeow
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Your code has been inspected by an extremely judgmental cat.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Paste a GitHub repository..."
            className="w-full rounded-2xl border border-[#353D49] bg-[#232933] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#7ACB7D]"
          />

          <textarea
            rows={10}
            placeholder="...or paste your code here."
            className="w-full rounded-2xl border border-[#353D49] bg-[#232933] px-5 py-4 text-white placeholder:text-gray-500 outline-none resize-none focus:border-[#7ACB7D]"
          />

          <button className="w-full rounded-2xl bg-[#7ACB7D] py-4 text-lg font-bold text-black transition hover:bg-[#6BBB6D]">
            Judge Me 🐟
          </button>
        </div>
      </div>
    </main>
  );
}
