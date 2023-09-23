import { Request, Response } from 'express';

export async function search(req: Request, res: Response) {
  try {
    return res.status(200).json({
      success: true,
      message: 'Search success',
      data: null
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: null
    })
  }
}