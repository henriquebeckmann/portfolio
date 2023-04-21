export function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex justify-center my-4">
      <p className="text-sm text-zinc-500">
        &copy; {date} Henrique Beckmann. All Rights Reserved.
      </p>
    </footer>
  );
}
