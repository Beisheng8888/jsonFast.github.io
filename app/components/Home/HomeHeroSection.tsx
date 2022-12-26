import { NewFile } from "../NewFile";


export function HomeHeroSection() {
  return (
    <div
      className={`flex items-stretch flex-col md:flex-row bg-[rgb(56,52,139)] lg:p-6 lg:pb-16 pt-20 lg:pt-32`}
    >
      <div className="self-center flex align-center md:w-1/2 px-60 pb-100 mt-100 lg:mt-0">
        <div className="max-w-lg">
          <NewFile />
        </div>
      </div>
    </div>
  );
}
