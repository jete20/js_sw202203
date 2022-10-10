export interface ICashFlow {
    type: 'INCOME' | 'EXPENSE';
    date: Date;
    amount: number; 
    description: string;
    _id?: unknown; // Se le pone unknown porque no se sabe que tipo de dato va a ser dependdiendo del gestor de base de datos
};