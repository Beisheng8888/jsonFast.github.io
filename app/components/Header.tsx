import { Logo } from "./Icons/Logo";
import { useJsonDoc } from "~/hooks/useJsonDoc";

export function Header() {
  const { doc } = useJsonDoc();

  return (
    <header className="flex items-center justify-between w-screen h-[40px] bg-indigo-700 dark:bg-slate-800 border-b-[1px] border-slate-600">
      <Logo className="pl-1 pr-2" width={"130"} />
    </header>
  );
}
