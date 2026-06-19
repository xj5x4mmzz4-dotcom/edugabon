import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

function Admin() {
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

    if (error) console.error(error);
    else setResults(data || []);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📊 Admin - Suivi des Élèves EduGabon</h1>
      <button onClick={fetchResults}>🔄 Actualiser les données</button>

      {loading && <p>Chargement des résultats...</p>}

      {!loading && results.length > 0 && (
        <table border="1" cellPadding="12" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th>Date</th>
              <th>Nom de l'élève</th>
              <th>Niveau</th>
              <th>Matière</th>
              <th>Score</th>
              <th>Pourcentage</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, index) => (
              <tr key={index}>
                <td>{new Date(r.created_at).toLocaleString('fr-FR')}</td>
                <td><strong>{r.student_name}</strong></td>
                <td>{r.grade}</td>
                <td>{r.subject}</td>
                <td>{r.score} / {r.total_questions}</td>
                <td style={{ color: 'green', fontWeight: 'bold' }}>{r.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && results.length === 0 && (
        <p style={{ color: 'gray' }}>Aucun résultat pour le moment.</p>
      )}
    </div>
  );
}

export default Admin;
