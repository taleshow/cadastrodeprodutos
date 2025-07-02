const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// --- MELHORIA: Configuração do Pool de Conexões ---
const dbConfig = {
  host: 'localhost',
  user: 'cadastro_produtos',
  password: '123456',
  database: 'cadastro_produtos',
  waitForConnections: true,
  connectionLimit: 10, // Número máximo de conexões no pool
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Rota GET para listar produtos
app.get('/produtos', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM produtos ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    res.status(500).json({ error: 'Erro interno ao buscar produtos' });
  }
});

// Rota POST para criar produto
app.post('/produtos', async (req, res) => {
  const { nome, descricao, preco, categoria } = req.body;
  const precoFloat = parseFloat(preco);

  // Validações
  if (!nome || !descricao || !preco || !categoria) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  // --- MELHORIA: Validação de preço negativo ---
  if (isNaN(precoFloat) || precoFloat < 0) {
    return res.status(400).json({ error: 'O preço deve ser um número positivo' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO produtos (nome, descricao, preco, categoria) VALUES (?, ?, ?, ?)',
      [nome, descricao, precoFloat, categoria]
    );
    
    res.status(201).json({
      id: result.insertId,
      nome,
      descricao,
      preco: precoFloat,
      categoria
    });
  } catch (err) {
    console.error('Erro ao criar produto:', err);
    res.status(500).json({ error: 'Erro interno ao criar produto' });
  }
});

// --- NOVA ROTA: DELETE para excluir produto ---
app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.execute(
      'DELETE FROM produtos WHERE id = ?',
      [id]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Produto excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao excluir produto:', err);
    res.status(500).json({ error: 'Erro interno ao excluir produto' });
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse a API em: http://localhost:${PORT}/produtos` );
});
