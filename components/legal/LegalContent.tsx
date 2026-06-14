interface LegalContentProps {
  title: string;
  children: React.ReactNode;
}

export function LegalContent({ title, children }: LegalContentProps) {
  return (
    <section className="bg-surface-muted py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-ink">{title}</h1>
        <div className="prose mt-8 max-w-none space-y-6 text-muted [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_a]:text-brand-blue">
          {children}
        </div>
      </div>
    </section>
  );
}
