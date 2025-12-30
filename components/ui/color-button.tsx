import Link from "next/link";

const GlowButton = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <Link href={href} target="_blank">
      <button className="relative p-[3px] cursor-pointer">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg pointer-events-none" />

        {/* Button */}
        <div className="relative px-8 py-2 bg-black rounded-[6px] text-white transition duration-200 hover:bg-transparent">
          {text}
        </div>
      </button>
    </Link>
  );
};

export default GlowButton;
