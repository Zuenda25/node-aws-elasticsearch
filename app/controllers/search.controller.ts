import { Request, Response } from 'express';
import EsClient from '../configs/es.config';

export async function search(req: Request, res: Response) {
  try {
    const { keyword } = req.query as { keyword: string };

    const response = await EsClient.search({
      index: 'search-book',
      q: keyword,
    })
    
    return res.status(200).json({
      success: true,
      message: 'Search success',
      data: response.hits.hits
    })
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: null
    })
  }
}