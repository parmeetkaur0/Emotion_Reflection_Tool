import React from 'react';

interface HistoryProps {
  history: { text: string; result: { emotion?: string; confidence?: number } }[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  if (!history.length) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-6">
      <h3 className="text-xl font-semibold text-primary mb-4">Analysis History</h3>
      {history.map((item, index) => (
        <div key={index} className="mb-4 p-4 border border-neutral rounded-md">
          <p className="text-gray-700"><strong>Text:</strong> {item.text}</p>
          <p className="text-gray-700"><strong>Emotion:</strong> {item.result.emotion}</p>
          <p className="text-gray-700"><strong>Confidence:</strong> {(item.result.confidence! * 100).toFixed(2)}%</p>
        </div>
      ))}
    </div>
  );
};

export default History;