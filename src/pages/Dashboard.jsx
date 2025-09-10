import { useEffect } from "react";
import { Helmet } from "react-helmet";

function TopNav() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-semibold">
            R
          </div>
          <h1 className="text-lg font-semibold">Rusmanto Jax</h1>
        </div>
        <div className="text-sm md:text-base text-gray-700 font-medium">
          Saldo: Rp 65.000.000
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <span className="py-3 border-b-2 border-[#1877F2] text-[#1877F2]">
              Dashboard
            </span>
            <span className="py-3">Akun FB</span>
            <span className="py-3">Transaksi</span>
            <span className="py-3">Produk</span>
            <span className="py-3">Laporan</span>
          </div>
          <button
            to="/login"
            onClick={handleLogout}
            className="text-red-500 cursor-pointer hover:underline"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

function Sidebar() {
  const items = [
    { label: "Dashboard", active: true },
    { label: "Manajemen Akun Facebook" },
    { label: "Transaksi" },
    { label: "Produk / Layanan" },
    { label: "Pengguna" },
    { label: "Laporan" },
    { label: "Pengaturan" },
  ];
  return (
    <aside className="bg-white border border-gray-200 rounded-xl p-2 w-full md:w-64">
      <ul className="flex md:block gap-2 md:gap-0">
        {items.map((it) => (
          <li key={it.label}>
            <button
              className={
                "w-full text-left px-3 py-2 rounded-lg md:rounded-md text-sm " +
                (it.active
                  ? "bg-[#F3F6FF] text-[#1877F2] font-medium"
                  : "hover:bg-gray-50 text-gray-700")
              }
            >
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Card({ title, children, footer }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      {title ? (
        <div className="mb-3 font-medium text-gray-800">{title}</div>
      ) : null}
      <div>{children}</div>
      {footer}
    </div>
  );
}

function Summary() {
  return (
    <Card title="Ringkasan Akun">
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="text-gray-600">Akun FB Aktif</div>
        <div className="text-right font-semibold">1</div>
        <div className="text-gray-600">Akun FB Limit</div>
        <div className="text-right font-semibold">0</div>
      </div>
      <div className="mt-3 h-px bg-gray-200" />
      <div className="mt-3 text-sm">
        <div className="text-gray-600">Total Belanja Ads</div>
        <div className="font-semibold">Rp 0 bulan ini</div>
      </div>
    </Card>
  );
}

function ActivityList({ title }) {
  return (
    <Card title={title}>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          Top Up Rp 65.000.000{" "}
          <span className="text-gray-500">(08/04/2025)</span>
        </li>
        <li>Akun FB Baru ditambahkan: 3</li>
        <li>Status verifikasi akun selesai</li>
      </ul>
    </Card>
  );
}

function SimpleChart() {
  return (
    <Card title="Grafik Pengeluaran Iklan">
      <div className="h-44">
        {/* reserve 40px left for Y-axis labels by shifting coordinates */}
        <svg viewBox="0 0 340 140" className="w-full h-full">
          <defs>
            <linearGradient id="a" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#CFE3FF" />
              <stop offset="100%" stopColor="#CFE3FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* horizontal grid & y-axis labels */}
          <g fontSize="10" fill="#6B7280" opacity="0.9">
            {/* grid lines and labels for values 4 -> 0 */}
            <line
              x1="40"
              y1="20"
              x2="340"
              y2="20"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <text x="12" y="24">
              4
            </text>
            <line
              x1="40"
              y1="50"
              x2="340"
              y2="50"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <text x="12" y="54">
              3
            </text>
            <line
              x1="40"
              y1="80"
              x2="340"
              y2="80"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <text x="12" y="84">
              2
            </text>
            <line
              x1="40"
              y1="110"
              x2="340"
              y2="110"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <text x="12" y="114">
              1
            </text>
            <line
              x1="40"
              y1="140"
              x2="340"
              y2="140"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <text x="12" y="134">
              0
            </text>
          </g>

          {/* filled area under line (shifted right by 40px) */}
          <polyline
            fill="url(#a)"
            stroke="none"
            points="40,120 40,120 40,120 40,120 40,120 40,120"
          />

          {/* main line */}
          <polyline
            fill="none"
            stroke="#1877F2"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            points="40,120 90,120 180,120 250,120 300,120 360,120"
          />

          {/* x axis labels (shifted) */}
          <g fontSize="10" fill="#6B7280">
            <text x="40" y="135">
              Mon
            </text>
            <text x="100" y="135">
              Wed
            </text>
            <text x="160" y="135">
              Thu
            </text>
            <text x="220" y="135">
              Fri
            </text>
            <text x="280" y="135">
              Sun
            </text>
          </g>
        </svg>
      </div>
    </Card>
  );
}

export default function Dashboard() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "/";
  }, []);

  return (
    <>
      <Helmet>
        <title>Ads Manager - Manage ads - Campaigns</title>
        {/* <link
          rel="icon"
          type="image/svg"
          href="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg"
        /> */}
      </Helmet>
      <div className="font-roboto min-h-screen bg-[#F5F6F8]">
        <TopNav />
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
          <Sidebar />
          <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Summary />
            <SimpleChart />
            <ActivityList title="Aktivitas Terbaru" />
          </main>
        </div>
      </div>
    </>
  );
}
