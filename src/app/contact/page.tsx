import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Contact Me
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Get in touch through the following channels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px]">
        <div className="flex items-center gap-2"> {/* Removed LinkedIn icon usage */}
          <Link
            href="#" // Placeholder LinkedIn link
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex items-center gap-2"> {/* Removed WhatsApp icon usage */}
          <Link
            href="#" // Placeholder WhatsApp link
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}