export default function Loading() {
  return (
    <div
      className="bg-white fixed inset-0 flex items-center justify-center"
      aria-label="Loading"
      role="status"
    >
      <img
        src="/todoist.png"
        alt="Loading spinner"
        className="w-5 h-5 animate-spin"
      />
    </div>
  );
}
