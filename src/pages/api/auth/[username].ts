import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../../services/api'

export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { method } = req
  const { username } = req.query

  if (method === 'GET') {
    return api
      .get(`users/${username}`)
      .then(response => {
        return res.status(200).json(response.data)
      })
      .catch(() => {
        return res.status(404).json({ message: `${username} not founded!` })
      })
  }

  return res.status(500).json({ message: 'bad request' })
}
