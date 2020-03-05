import { Request, Response } from 'express';
import EmailService from '../../services/EmailService';

const users = [{ name: 'Helvécio', email: 'hsneto.ssa@ftc.edu.br' }];

class UserController {
  async index(req: Request, res: Response) {
    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Helvécio Neto', email: 'helvecioneto77@gmail.com' },
      message: { subject: 'Bem-vindo ao sistema', body: 'Hello World' },
    });

    res.send();
  }
}

export default new UserController();
