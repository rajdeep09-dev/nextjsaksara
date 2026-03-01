export default function SectionHeading({
  subheading,
  heading,
  description,
  align = 'left',
  gradientWord,
  withLine = true,
}) {
  const headingParts = heading.split(new RegExp(`(${gradientWord})`, 'i'));

  return (
    <div style={{ textAlign: align === 'center' ? 'center' : 'left' }}>
      {/* Subheading */}
      {subheading && (
        <div className="inline-flex items-center gap-3 mb-4">
          {withLine && (
            <div
              style={{
                width: '40px',
                height: '1.5px',
                background: 'var(--accent)',
                borderRadius: '1px',
              }}
            />
          )}
          <span
            className="font-inter text-[0.8rem] font-medium uppercase tracking-[0.15em]"
            style={{ color: 'var(--accent)' }}
          >
            {subheading}
          </span>
        </div>
      )}

      {/* Main Heading */}
      <h1
        className="font-syne font-bold leading-tight mb-6"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: '1.05',
        }}
      >
        {gradientWord
          ? headingParts.map((part, i) => 
              part.toLowerCase() === gradientWord.toLowerCase() ? (
                <span
                  key={i}
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {part}
                </span>
              ) : (
                part
              )
            )
          : heading}
      </h1>

      {/* Description */}
      {description && (
        <p
          className="font-inter font-light leading-relaxed"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            color: 'var(--text-secondary)',
            maxWidth: '550px',
            marginTop: '20px',
            lineHeight: '1.75',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
