type Turma = {
  id: string;
  title: string;
  informations: {
    description: string;
    dateSchedule: string;
    hourSchedule: string;
    color: string;
  };
  subscriptions: {
    price: number;
    subscriptionSchedule: string;
    status: string;
  };
  registrations: {
    value: number;
  };
  stripeProductID: string; // Adicionando o campo stripeProductID
};

// As props que a nossa página irá receber do getStaticProps.
interface InscricoesPageProps {
  turmas: Turma[];
  error?: string;
}
export type { Turma, InscricoesPageProps };