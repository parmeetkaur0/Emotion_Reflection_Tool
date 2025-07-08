import React from 'react';

interface InputFormProps {
  text: string;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClear: () => void;
  loading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ text, onTextChange, onSubmit, onClear, loading }) => {
  return (
    <form onSubmit={onSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-6">
      <textarea
        value={text}
        onChange={onTextChange}
        placeholder="Enter your text here (e.g., 'I feel nervous about my first job interview')..."
        required
        className="w-full h-32 p-4 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
      />
      <div className="flex gap-4 mt-4">
        <button
          type="submit"
          disabled={loading}
          className="custom-button flex-1 py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
        >
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={onClear}
          className="flex-1 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
        >
          Clear
        </button>
      </div>
      {loading && (
        <div className="w-full bg-neutral rounded-full h-2.5 mt-2">
          <div className="custom-result-bar h-2.5 rounded-full transition-all duration-300" style={{ width: '60%' }}></div>
        </div>
      )}
    </form>
  );
};

export default InputForm;