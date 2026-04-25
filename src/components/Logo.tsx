export function Logo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-label="After House"
    >
      <path
        d="M4 28V10L16 4L28 10V28H20V20C20 17.7909 18.2091 16 16 16C13.7909 16 12 17.7909 12 20V28H4Z"
        fill="currentColor"
      />
    </svg>
  );
}
