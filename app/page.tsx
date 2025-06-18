import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>{/* */}
      <Image
          src="/my_portrait.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5" /* grayscale hover:grayscale-0 */
          unoptimized
          width={160}
          height={160}
          priority
        />
      <h1 className="mb-8 text-2xl font-medium">
        About Me
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Driven and detail-oriented full-stack Software Engineer with a Bachelor of Science in Information Technology and a strong foundation 
          in object-oriented programming, data structures, and software engineering principles. 
        </p>
        <p>
          I have hands-on experience building web-based applications across the stack—from crafting clean, 
          intuitive user interfaces to designing and maintaining robust backend systems.
        </p>
        <p>
          I thrive in collaborative, iterative environments that value planning, feedback, and continuous improvement. 
          Alongside development work, I also write clear technical documentation and system requirements to help keep teams aligned 
          and projects moving forward. An eager learner who’s always expanding my toolkit, I adapt quickly and feel at ease across the 
          entire development lifecycle. 
        </p>
        <p>
          I also enjoy playing tennis on the weekend.
        </p>
      </div>
    </section>
  );
}
