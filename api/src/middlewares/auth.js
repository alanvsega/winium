const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if ((req.originalUrl === '/user' && req.method === 'POST')
    || req.originalUrl === '/login') return next();

  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send('Token não fornecido');

  const [, token] = authorization.split(' ');

  try {
    const decoded = verify(token, process.env.JWT_KEY);
    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).send('Não autorizado');
  }
};
