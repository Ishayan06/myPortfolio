import React from 'react';
import { cn } from "@/lib/utils";

const MagicButton = ({
    className,
    text,
    icon,position,
    handleClick,
}:{
    className?:String;
    text?:String;
    icon:React.ReactNode;
    position:String;
    handleClick?: ()=>void;
}) => {
  return (
    <div className={cn("font-bold", className)}>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    {position=='left' && icon}
    {text}
    {position=='right' && icon}
  </span>
</button>
    </div>
  );
}

export default MagicButton;
