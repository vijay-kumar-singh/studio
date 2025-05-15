export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Portfolio Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
