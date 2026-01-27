// src/pages/incricoes.tsx
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Main } from "@/components/inscricoes/Main";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { ApprovedStudentsFooter } from "@/components/Footer/approvedStudents";
import { Turma } from "@/types";
import { Approvals } from "@/components/turmas/approvals";
import { Diferentials } from "@/components/turmas/diferentials";

// A tipagem para os dados de cada turma.
// É uma boa prática manter isso consistente com o componente filho.

// As props que a nossa página irá receber do getStaticProps.
interface InscricoesPageProps {
  turmas: Turma[];
  error?: string;
}

// O componente da página em si.
const Inscricoes: NextPage<InscricoesPageProps> = ({ turmas, error }) => {
  // Se a busca de dados falhar, mostramos uma mensagem de erro amigável.
  if (error) {
    return (
      <>
        <Header />
        <Center height="50vh" px={4}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h1" size="lg">Oops! Algo deu errado.</Heading>
            <Text color="red.500">{error}</Text>
            <Text>Não foi possível carregar as turmas. Por favor, tente novamente mais tarde.</Text>
          </VStack>
        </Center>
        <Footer mt={0}><ApprovedStudentsFooter /></Footer>
      </>
    );
  }

  // Se a busca de dados for bem-sucedida, renderizamos a página.
  return (
    <>
      <Header />
      {/* Aqui usamos o nosso novo componente Main, passando a lista de turmas para ele */}
      <Main schoolClassList={turmas} />
    </>
  );
};

// Função do Next.js para buscar os dados no momento do build (Static Site Generation).
export const getStaticProps: GetStaticProps<InscricoesPageProps> = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/schoolClass?status=active`;
  try {
    console.log("Dados de turmas recebidos da API:", apiUrl);
    const response = await axios.get(apiUrl);
    const turmasData = response.data?.schoolClassResponse?.schoolClassList;
    if (!Array.isArray(turmasData)) {
      throw new Error("Formato de dados inválido recebido da API.");
    }

    return {
      props: {
        turmas: turmasData,
      },
      // Revalida (tenta recriar) a página no servidor a cada 60 segundos
      // para manter a lista de turmas atualizada.
      revalidate: 60,
    };
  } catch (error) {
    console.error("Erro ao buscar turmas:", error);
    return {
      props: {
        turmas: [],
        error: "Não foi possível conectar ao servidor para buscar as turmas.",
      },
    };
  }
};

export default Inscricoes;
