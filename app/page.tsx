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
          Passionate and motivated entry-level full-stack Software Engineer with 
          a Bachelor of Science degree in Information Technology, with an understanding 
          of object-oriented programming, data structures, and software engineering best practices. 
        </p>
        <p>
          Have worked on both the Front End and Back end of web-based projects. Have also made use of API integration. 
        </p>
        <p>
          Familiar with database systems and database design using SQL and RDBMS. Also familiar with the SDLC, Agile methodology, and Sprints. 
          Comfortable with the use of version control such a Git and GitHub.
        </p>
      </div>
    </section>
  );
}
