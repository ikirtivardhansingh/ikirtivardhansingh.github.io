export default function ThiruvelukkaiFundraiser() {
  const raised = 16000;
  const goal = 2000000;

  const percentage = Math.min((raised / goal) * 100, 100);

  const formatINR = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-16 text-stone-100"
      style={{
        fontFamily: "Inter, Segoe UI, sans-serif",
        background: `
          linear-gradient(135deg, #0f172a 0%, #111827 35%, #1e293b 100%)
        `,
        backgroundSize: "100% 100%",
        animation: "none",
      }}
    >
      <style>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-stone-200 shadow-sm mb-5 backdrop-blur-md">
            <span className="text-xl">🛕</span>
            <span className="font-medium text-stone-200 tracking-wide text-sm">
              Thiruvelukkai Divya Desam Restoration Status
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-4 text-stone-100">
            Current Fundraising Progress
          </h1>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-stone-400">
            Community contributions towards the ongoing stone flooring restoration work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="uppercase tracking-[0.2em] text-sm text-stone-500 mb-3">
                  Fundraising Progress
                </p>

                <h2 className="text-5xl font-black text-emerald-700">
                  {percentage.toFixed(1)}%
                </h2>
              </div>

              <div className="text-right">
                <p className="text-stone-500 text-sm">Target</p>
                <h3 className="text-2xl font-bold text-stone-800">
                  {formatINR(goal)}
                </h3>
              </div>
            </div>

            <div className="w-full h-7 rounded-full overflow-hidden bg-white/10 mb-10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="rounded-3xl bg-white/10 border border-white/10 p-6 shadow-md">
                <p className="text-stone-500 text-sm mb-2">
                  Amount Raised
                </p>

                <h3 className="text-3xl font-black text-emerald-700">
                  {formatINR(raised)}
                </h3>
              </div>

              <div className="rounded-3xl bg-white/10 border border-white/10 p-6 shadow-md">
                <p className="text-stone-500 text-sm mb-2">
                  Remaining Goal
                </p>

                <h3 className="text-3xl font-black text-amber-600">
                  {formatINR(goal - raised)}
                </h3>
              </div>
            </div>

            <div className="space-y-5 mb-10">
              <div className="rounded-3xl bg-emerald-500/10 border border-emerald-100 p-6 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-stone-800">
                    Inner Temple Flooring
                  </h4>

                  <span className="text-2xl font-black text-emerald-700">
                    ₹5L
                  </span>
                </div>

                <p className="text-stone-400 leading-relaxed">
                  Granite flooring restoration inside the sacred temple premises.
                </p>
              </div>

              <div className="rounded-3xl bg-amber-500/10 border border-amber-100 p-6 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-stone-800">
                    Prakaram Restoration
                  </h4>

                  <span className="text-2xl font-black text-amber-700">
                    ₹15L
                  </span>
                </div>

                <p className="text-stone-400 leading-relaxed">
                  Stone flooring restoration throughout the prakaram pathways.
                </p>
              </div>
            </div>

            <a
              href="https://forms.gle/TWh81ffJk27GpBXi7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center px-8 py-5 rounded-3xl bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold text-lg shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              Contribute to Bhagavan’s Kainkaryam 🙏🏼
            </a>
          </div>

          <div className="rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-emerald-400 to-amber-300 flex items-center justify-center text-5xl shadow-lg">
                  🦁
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-stone-500 text-sm mb-2">
                    Divya Desam
                  </p>

                  <h2 className="text-4xl font-black text-stone-100">
                    Thiruvelukkai
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-stone-200">
                <p>
                  Thiruvelukkai is one of the sacred 108 Divya Desams located in
                  Kanchipuram, dedicated to Lord Narasimha as Azhagiya Singar.
                </p>

                <p>
                  “Velukkai” means the sacred place where Bhagavan willingly
                  chose to reside for the continued protection of devotees.
                </p>

                <div className="rounded-[2rem] bg-gradient-to-br from-emerald-50 to-yellow-50 border border-white/10 p-8 shadow-md">
                  <p className="italic text-stone-200 leading-loose text-xl">
                    “The Lord adorned with the cool tulasi garland never leaves
                    these places even for a moment...” 🌿
                  </p>

                  <p className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-500">
                    - Peyāzhwār, Mūnram Tiruvandādi
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-3xl bg-white/10 p-5 text-center shadow-md border border-white/10">
                <div className="text-4xl mb-2">🛕</div>
                <p className="text-sm font-semibold text-stone-200">
                  Sacred Temple
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5 text-center shadow-md border border-white/10">
                <div className="text-4xl mb-2">🌿</div>
                <p className="text-sm font-semibold text-stone-200">
                  Community Kainkaryam
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5 text-center shadow-md border border-white/10">
                <div className="text-4xl mb-2">✨</div>
                <p className="text-sm font-semibold text-stone-200">
                  Divine Restoration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  ); 
}
