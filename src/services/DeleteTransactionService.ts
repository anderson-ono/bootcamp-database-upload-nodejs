import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepository.remove(transaction);

    /*
    Verificar qual a diferença entre o código que fiz abaixo
    const deleteResult = await transactionsRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new AppError('Transaction does not exist');
    }
     */
  }
}

export default DeleteTransactionService;
