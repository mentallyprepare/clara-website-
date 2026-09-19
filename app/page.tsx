import { claraSections } from "@/lib/clara-content";

export default function Home() {
  return (
    <main>
      {claraSections.map((section, index) => (
        <section className="foundation-section" id={section.id} key={section.id}>
          {index === 0 ? <h1>{section.heading}</h1> : <h2>{section.heading}</h2>}
          <p>{section.summary}</p>
        </section>
      ))}
    </main>
  );
}
