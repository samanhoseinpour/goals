import { FormProps } from '../types';

export default function Form({ title, description, buttonTitle }: FormProps) {
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label id="title" className="input-label">
          {title}
        </label>
        <input
          type="title"
          id="title"
          className="input"
          placeholder="اسم هدفت..."
          required
        />
      </div>
      <div className="mb-5">
        <label id="description" className="input-label">
          {description}
        </label>
        <textarea
          id="description"
          rows={4}
          className="textarea"
          placeholder="...توضیحات درباره هدف"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {buttonTitle}
      </button>
    </form>
  );
}
