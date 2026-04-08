export function Aurora() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,80,220,0.18),transparent)]" />

      {/* Aurora blob 1 - top left */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(109,40,217,0.7) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'aurora1 12s ease-in-out infinite alternate',
        }}
      />

      {/* Aurora blob 2 - top right */}
      <div
        className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'aurora2 15s ease-in-out infinite alternate',
        }}
      />

      {/* Aurora blob 3 - center bottom */}
      <div
        className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'aurora3 18s ease-in-out infinite alternate',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
