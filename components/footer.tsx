import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <div className="font-bold text-2xl">🖋 AlphaNotes</div>
        </Link>
        <span className="text-muted-foreground block text-center text-sm mt-10">
          {" "}
          © {new Date().getFullYear()} AlphaNotes, All rights reserved
        </span>
      </div>
    </footer>
  );
}
