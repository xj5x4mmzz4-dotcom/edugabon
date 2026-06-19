import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>📚 EduGabon</h1>
      <p><strong>Réviser avec le programme gabonais</strong></p>
      <p>Du CP1 à la Terminale — Quiz interactifs</p>

      <div style={{ margin: '30px 0' }}>
        <a 
          href="#/quiz" 
          style={{
            display: "inline-block",
            padding: "16px 32px",
            backgroundColor: "#10b981",
            color: "white",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
            margin: "10px"
          }}
        >
          ▶ Commencer à réviser
        </a>

        <a 
          href="#/classement" 
          style={{
            display: "inline-block",
            padding: "16px 32px",
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
            margin: "10px"
          }}
        >
          🏆 Voir le classement
        </a>

        {/* ADMIN BUTTON */}
        <a 
          href="#/admin" 
          style={{
            display: "inline-block",
            padding: "16px 32px",
            backgroundColor: "#8b5cf6",
            color: "white",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
            margin: "10px"
          }}
        >
          📊 Accès Admin (Suivi des Élèves)
        </a>
      </div>

      <p style={{ marginTop: '50px', color: '#666' }}>
        Créé par Henoc Ayivi • EduGabon
      </p>
    </div>
  );
};

export default Home;
