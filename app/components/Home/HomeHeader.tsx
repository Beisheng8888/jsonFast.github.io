
export function HomeHeader({ fixed }: { fixed?: boolean }) {
  return (
    <header
      className={`${
        fixed ? "fixed" : ""
      } z-20 flex items-center justify-between w-screen h-[52px] sm:h-[82px] px-4 bg-indigo-700`}
    >
    </header>
  );
}
