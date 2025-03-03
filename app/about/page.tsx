import Image from "next/legacy/image";

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <Image
          src="/images/abouts/profpic.jpg"
          width={150}
          height={150}
          alt="Name"
          className="rounded-full"
        />
        <div>
          <p className="text-xl mb-4">Hi, I'm Aliffiqri Agwar.</p>
          <p className="mb-4">
            I'm a game engineer with a passion for technology, education, and
            storytelling. I build scalable software, share knowledge through
            teaching, and craft engaging visuals through video editing and
            esports broadcasting.
          </p>
          <p>
            When I'm not working, I’m exploring new tech, gaming, or seeking
            fresh inspiration from the world around me.
          </p>
        </div>
      </div>
    </div>
  );
}
