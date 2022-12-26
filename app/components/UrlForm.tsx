import { Form } from "remix";

export type UrlFormProps = {
  className?: string;
};

export function UrlForm({ className }: UrlFormProps) {
  return (
    <Form
      method="post"
      action="/actions/createFromUrl"
      className={`${className}`}
    >
      <div className="flex">
        <input
          type="text"
          name="jsonUrl"
          id="jsonUrl"
          className="block flex-grow text-base text-slate-200 placeholder:text-slate-300 bg-slate-800 border border-slate-600 rounded-l-sm py-2 px-3 transition duration-300 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="在此处输入 JSON URL 或粘贴 JSON..."
        />
        <button
          type="submit"
          value="Go"
          className="inline-flex items-center justify-center px-10 py-10 border border-transparent font-medium rounded-r-sm text-white bg-lime-500 transition hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
        >
          Go
        </button>
      </div>
    </Form>
  );
}
