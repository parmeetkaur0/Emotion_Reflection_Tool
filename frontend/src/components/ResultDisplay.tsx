import React from 'react';

interface ResultDisplayProps {
  result: { emotion?: string; confidence?: number } | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-6">
      <h3 className="text-xl font-semibold text-primary mb-2">Analysis Result</h3>
      <p className="text-gray-700">Emotion: <span className="font-medium">{result.emotion}</span></p>
      <p className="text-gray-700">Confidence: <span className="font-medium">{(result.confidence! * 100).toFixed(2)}%</span></p>
      <div className="mt-2 w-full bg-neutral rounded-full h-2.5">
        <div
          className="custom-result-bar h-2.5 rounded-full"
          style={{ width: `${(result.confidence! * 100).toFixed(0)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ResultDisplay;