import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';
import ErrorMessage from './components/ErrorMessage';
import History from './components/History';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ emotion?: string; confidence?: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<{ text: string; result: { emotion?: string; confidence?: number } }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Please enter some text.');
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/analyze', { text });
      const newResult = response.data;
      setResult(newResult);
      setHistory(prev => [...prev, { text, result: newResult }]);
    } catch (err) {
      setError('Failed to analyze text, please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Header />
      <main className="flex-grow">
        <InputForm text={text} onTextChange={(e) => setText(e.target.value)} onSubmit={handleSubmit} onClear={handleClear} loading={loading} />
        <ErrorMessage error={error} />
        <ResultDisplay result={result} />
        <History history={history} />
      </main>
      <Footer />
    </div>
  );
};

export default App;