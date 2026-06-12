import { Check } from "lucide-react";

type CheckListProps = {
  items: string[];
  className?: string;
};

export function CheckList({ items, className = "" }: CheckListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-ink/70" key={item}>
          <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue/10 text-blue">
            <Check aria-hidden size={14} strokeWidth={2.4} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
