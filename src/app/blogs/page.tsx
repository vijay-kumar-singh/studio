export default function BlogsPage() {  
  const blogPosts = [
    "Direct DB Access from Next.js (SSR or API Routes) vs Next.js ➜ Backend (Node.js, Spring Boot) ➜ DB",
    "The Pros and Cons of Using a Headless CMS",
    "Getting Started with Serverless Functions",
    "Building Scalable Applications with Microservices",
    "Optimizing Your Website for Performance and SEO",
  ];


  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Blogs
          </h1>
          <ul className="max-w-[700px] text-lg text-muted-foreground list-disc list-inside">
            {blogPosts.map((title, index) => (
              <li key={index} className="mb-2">
                {title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}