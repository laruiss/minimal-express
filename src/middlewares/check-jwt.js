const { checkAccessToken } = require('../utils/token-utils')

/**
 * Vérifie que l'utilisateur est authentifié
 *
 * @type {import('express').Handler}
*/
const checkJwt = (req, res, next) => {
  // 1 Vérifier que le token est présent
  // On récupère le token dans le header Authorization
  const token = req.headers.authorization?.replace('Bearer ', '')

  // 2 Vérifier que le token est présent
  if (!token) {
    // Puisqu'il n'est pas présent, on renvoie une erreur 401 avec un message approprié
    res
      .status(401)
      .json({ message: 'Vous devez être authentifié pour accéder à cette ressource' })
    return
  }

  // 3 Vérifier que le token est valide
  try {
    const decoded = checkAccessToken(token)
    if (!decoded) {
      throw new Error()
    }
  } catch (error) {
    // On arrive ici si le token est invalide (expiré, modifié, etc.)
    // On renvoie donc une erreur 401 avec un message approprié
    res
      .status(401)
      .json({ message: 'Le token semble invalide' })
    return
  }

  // Si on arrive ici, c'est que l'utilisateur est authentifié correctement
  // On peut donc passer à la suite
  next()
}

module.exports = checkJwt
