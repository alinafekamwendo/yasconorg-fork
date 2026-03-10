$pageShell = @'
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageShellProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
  heroBg?: string;
}

export default function PageShell({
  title,
  subtitle,
  breadcrumbs = [],
  children,
  heroBg = "bg-green-900",
}: PageShellProps) {
  return (
    <main className="min-h-screen pt-20">
      <div className={`${heroBg} text-white py-16 px-6`}>
        <div className="max-w-7xl mx-auto">
          {breadcrumbs.length > 0 && (
            <nav className="text-sm text-white/60 mb-4 flex gap-2 flex-wrap">
              <Link href="/" className="hover:text-white">Home</Link>
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>/</span>
                  {b.href ? (
                    <Link href={b.href} className="hover:text-white">{b.label}</Link>
                  ) : (
                    <span className="text-white">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-white/75 max-w-2xl text-lg">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-14">
        {children}
      </div>
    </main>
  );
}
'@
Set-Content -Path "components/common/PageShell.tsx" -Value $pageShell -Encoding UTF8
Write-Host "PageShell.tsx created!"