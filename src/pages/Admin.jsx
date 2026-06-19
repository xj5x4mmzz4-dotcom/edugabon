import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';   // ← Try this path

const Admin = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const { data, error } = await supabase
      .from('quiz_results')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error:', error);
    } else {
      setResults(data || []);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>📊 Admin Dashboard - EduGabon</h1>
      <button onClick={fetchResults} style={{ padding: '10px 20px', margin: '10px 0' }}>
        🔄 Actualiser
      </button>

      {loading ? (
        <p>Chargement des données...</p>
      ) : results.length === 0 ? (
        <p>Aucun résultat pour le moment.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f4f4f4' }}>
              <th>Date</th>
              <th>Nom</th>
              <th>Niveau</th>
              <th>Matière</th>
              <th>Score</th>
              <th>Pourcentage</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td>{new Date(r.created_at).toLocaleString('fr-FR')}</td>
                <td><strong>{r.student_name}</strong></td>
                <td>{r.grade}</td>
                <td>{r.subject}</td>
                <td>{r.score} / {r.total_questions}</td>
                <td style={{ fontWeight: 'bold', color: 'green' }}>{r.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
