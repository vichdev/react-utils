import { useState, useEffect } from 'react';

interface UseTestLibHookResult {
  data: string | null;
  loading: boolean;
  error: string | null;
}

function useTestLibHook(): UseTestLibHookResult {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando uma chamada de API ou funcionalidade da sua lib
        const result = await new Promise<string>((resolve) => {
          setTimeout(() => resolve('Dados retornados pela lib!'), 1000);
        });

        setData(result);
      } catch (err) {
        setError('Ocorreu um erro ao buscar os dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useTestLibHook;
