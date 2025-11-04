import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  VStack,
  Checkbox,
  Text,
  Divider,
  Flex,
  Link,
  Icon,
} from '@chakra-ui/react';
import { Turma } from '@/types';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface StudentFormProps {
  selectedTurma: Turma;
  onBack: () => void;
  onSubmit: (data: FieldValues) => Promise<void>;
}

export function StudentForm({ selectedTurma, onBack, onSubmit }: StudentFormProps) {
  const {
    handleSubmit,
    register,
    watch, // Importamos o watch para a validação de email e idade
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' }); // 'onBlur' valida o campo quando o usuário sai dele

  // Observamos o valor do campo 'email' para a confirmação
  const emailValue = watch('email');

  // Observa a data de nascimento para mostrar o campo de responsável
  const birthDate = watch('birth');
  const [isMinor, setIsMinor] = useState(false);

  // Função para verificar se é menor de idade
  const checkMinor = (dateString: string) => {
    if (!dateString) return false;
    const today = new Date();
    const birth = new Date(dateString);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age < 18;
  };

  return (
    <Box
      w="100%"
      maxW="800px"
      borderWidth="1px"
      borderRadius="lg"
      p={{ base: 4, md: 8 }}
      boxShadow="lg"
      bg="white"
    >
      <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={6} align="stretch">
        <Heading as="h2" size="lg" textAlign="center">
          Formulário de Inscrição
        </Heading>
        <Text textAlign="center" color="gray.500">
          Você está se inscrevendo para a turma: <strong>{selectedTurma.title}</strong>
        </Text>
        <Divider />

        {/* --- Dados Pessoais --- */}
        <Heading as="h3" size="md" pt={4}>Dados Pessoais</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl isInvalid={!!errors.nome}>
            <FormLabel htmlFor="nome">Nome</FormLabel>
            <Input id="nome" {...register('nome', { required: 'Nome é obrigatório' })} />
            <FormErrorMessage>{errors.nome && String(errors.nome.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.sobrenome}>
            <FormLabel htmlFor="sobrenome">Sobrenome</FormLabel>
            <Input id="sobrenome" {...register('sobrenome', { required: 'Sobrenome é obrigatório' })} />
            <FormErrorMessage>{errors.sobrenome && String(errors.sobrenome.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" {...register('email', { required: 'Email é obrigatório' })} />
            <FormErrorMessage>{errors.email && String(errors.email.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.confirmacaoEmail}>
            <FormLabel htmlFor="confirmacaoEmail">Confirme seu Email</FormLabel>
            <Input
              id="confirmacaoEmail"
              type="email"
              {...register('confirmacaoEmail', {
                required: 'Confirmação de email é obrigatória',
                validate: (value) =>
                  value === emailValue || 'Os e-mails não conferem.'
              })}
            />
            <FormErrorMessage>{errors.confirmacaoEmail && String(errors.confirmacaoEmail.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.birth}>
            <FormLabel htmlFor="birth">Data de Nascimento</FormLabel>
            <Input
              id="birth"
              type="date"
              {...register('birth', {
                required: 'Data de nascimento é obrigatória',
                onChange: (e) => setIsMinor(checkMinor(e.target.value))
              })}
            />
            <FormErrorMessage>{errors.birth && String(errors.birth.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.gender}>
            <FormLabel htmlFor="gender">Gênero</FormLabel>
            <Select id="gender" {...register('gender', { required: 'Gênero é obrigatório' })}>
              <option value="">Selecione...</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
              <option value="Prefiro não informar">Prefiro não informar</option>
            </Select>
            <FormErrorMessage>{errors.gender && String(errors.gender.message)}</FormErrorMessage>
          </FormControl>

          {/* --- NOVO CAMPO CONDICIONAL --- */}
          {isMinor && (
            <FormControl isInvalid={!!errors.emailResponsavel} gridColumn="span 2">
              <FormLabel htmlFor="emailResponsavel">E-mail do Responsável (Obrigatório para menores de 18)</FormLabel>
              <Input
                id="emailResponsavel"
                type="email"
                {...register('emailResponsavel', {
                  required: isMinor ? 'Email do responsável é obrigatório.' : false
                })}
              />
              <FormErrorMessage>{errors.emailResponsavel && String(errors.emailResponsavel.message)}</FormErrorMessage>
            </FormControl>
          )}

          <FormControl isInvalid={!!errors.cpf}>
            <FormLabel htmlFor="cpf">CPF</FormLabel>
            <Input id="cpf" {...register('cpf', { required: 'CPF é obrigatório' })} />
            <FormErrorMessage>{errors.cpf && String(errors.cpf.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.rg}>
            <FormLabel htmlFor="rg">RG</FormLabel>
            <Input id="rg" {...register('rg', { required: 'RG é obrigatório' })} />
            <FormErrorMessage>{errors.rg && String(errors.rg.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.ufrg}>
            <FormLabel htmlFor="ufrg">UF do RG</FormLabel>
            <Input id="ufrg" {...register('ufrg', { required: 'UF do RG é obrigatória' })} />
            <FormErrorMessage>{errors.ufrg && String(errors.ufrg.message)}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>

        {/* --- Contato --- */}
        <Heading as="h3" size="md" pt={4}>Contato</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl isInvalid={!!errors.phoneNumber}>
            <FormLabel htmlFor="phoneNumber">Celular (com DDD)</FormLabel>
            <Input id="phoneNumber" type="tel" {...register('phoneNumber', { required: 'Celular é obrigatório' })} />
            <FormErrorMessage>{errors.phoneNumber && String(errors.phoneNumber.message)}</FormErrorMessage>
          </FormControl>
          <FormControl pt={8}>
            <Checkbox id="isPhoneWhatsapp" {...register('isPhoneWhatsapp')}>Este número é WhatsApp</Checkbox>
          </FormControl>
        </SimpleGrid>

        {/* --- Endereço --- */}
        <Heading as="h3" size="md" pt={4}>Endereço</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          <FormControl isInvalid={!!errors.zipCode} gridColumn={{ base: 'span 1', sm: 'span 2', md: 'span 1' }}>
            <FormLabel htmlFor="zipCode">CEP</FormLabel>
            <Input id="zipCode" {...register('zipCode', { required: 'CEP é obrigatório' })} />
            <FormErrorMessage>{errors.zipCode && String(errors.zipCode.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.street} gridColumn={{ base: 'span 1', sm: 'span 2' }}>
            <FormLabel htmlFor="street">Rua / Logradouro</FormLabel>
            <Input id="street" {...register('street', { required: 'Rua é obrigatória' })} />
            <FormErrorMessage>{errors.street && String(errors.street.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.homeNumber}>
            <FormLabel htmlFor="homeNumber">Número</FormLabel>
            <Input id="homeNumber" {...register('homeNumber', { required: 'Número é obrigatório' })} />
            <FormErrorMessage>{errors.homeNumber && String(errors.homeNumber.message)}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="complement">Complemento</FormLabel>
            <Input id="complement" {...register('complement')} />
          </FormControl>
          <FormControl isInvalid={!!errors.district}>
            <FormLabel htmlFor="district">Bairro</FormLabel>
            <Input id="district" {...register('district', { required: 'Bairro é obrigatório' })} />
            <FormErrorMessage>{errors.district && String(errors.district.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.city}>
            <FormLabel htmlFor="city">Cidade</FormLabel>
            <Input id="city" {...register('city', { required: 'Cidade é obrigatória' })} />
            <FormErrorMessage>{errors.city && String(errors.city.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.state}>
            <FormLabel htmlFor="state">Estado</FormLabel>
            <Input id="state" {...register('state', { required: 'Estado é obrigatório' })} />
            <FormErrorMessage>{errors.state && String(errors.state.message)}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>

        {/* --- Informações Adicionais (campos obrigatórios) --- */}
        <Heading as="h3" size="md" pt={4}>Informações Adicionais</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl isInvalid={!!errors.selfDeclaration}>
            <FormLabel htmlFor="selfDeclaration">Autodeclaração</FormLabel>
            <Input id="selfDeclaration" {...register('selfDeclaration', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.selfDeclaration && String(errors.selfDeclaration.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.oldSchool}>
            <FormLabel htmlFor="oldSchool">Escola em que cursou o Ensino Médio</FormLabel>
            <Input id="oldSchool" {...register('oldSchool', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.oldSchool && String(errors.oldSchool.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.oldSchoolAdress}>
            <FormLabel htmlFor="oldSchoolAdress">Endereço da Escola</FormLabel>
            <Input id="oldSchoolAdress" {...register('oldSchoolAdress', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.oldSchoolAdress && String(errors.oldSchoolAdress.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.highSchoolGraduationDate}>
            <FormLabel htmlFor="highSchoolGraduationDate">Data de Conclusão do E.M.</FormLabel>
            <Input id="highSchoolGraduationDate" type="date" {...register('highSchoolGraduationDate', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.highSchoolGraduationDate && String(errors.highSchoolGraduationDate.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.highSchoolPeriod}>
            <FormLabel htmlFor="highSchoolPeriod">Período do Ensino Médio</FormLabel>
            <Input id="highSchoolPeriod" {...register('highSchoolPeriod', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.highSchoolPeriod && String(errors.highSchoolPeriod.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.metUsMethod}>
            <FormLabel htmlFor="metUsMethod">Como nos conheceu?</FormLabel>
            <Input id="metUsMethod" {...register('metUsMethod', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.metUsMethod && String(errors.metUsMethod.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.exStudent}>
            <FormLabel htmlFor="exStudent">Já foi nosso aluno?</FormLabel>
            <Select id="exStudent" {...register('exStudent', { required: 'Campo obrigatório' })}>
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </Select>
            <FormErrorMessage>{errors.exStudent && String(errors.exStudent.message)}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>

        {/* --- NOVO CAMPO: CÓDIGO DE DESCONTO --- */}
        <Heading as="h3" size="md" pt={4}>Pagamento</Heading>
        <FormControl isInvalid={!!errors.codigoDesconto}>
          <FormLabel htmlFor="codigoDesconto">Código de Desconto (Opcional)</FormLabel>
          <Input id="codigoDesconto" {...register('codigoDesconto')} />
          <FormErrorMessage>{errors.codigoDesconto && String(errors.codigoDesconto.message)}</FormErrorMessage>
        </FormControl>

        {/* --- NOVOS TERMOS DE ACEITE --- */}
        <Heading as="h3" size="md" pt={4}>Termos e condições</Heading>
        <VStack spacing={4} align="flex-start">
          <FormControl isInvalid={!!errors.aceiteTermoCiencia}>
            <Checkbox
              id="aceiteTermoCiencia"
              {...register('aceiteTermoCiencia', { required: 'Você deve aceitar o Termo de Ciência' })}
            >
              Eu li e aceito o <Link href="https://drive.google.com/file/d/1uRIViYS0y9Ji1QvbPcN12_mOpcisjxD1/view?usp=sharing" isExternal color="blue.500">
                Termo de Ciência <Icon as={ExternalLinkIcon} mx="2px" />
              </Link> (Obrigatório)
            </Checkbox>
            <FormErrorMessage>{errors.aceiteTermoCiencia && String(errors.aceiteTermoCiencia.message)}</FormErrorMessage>
            <Text fontSize="xs" color="gray.500" mt={1}>
              Refere-se ao questionário e veracidade das informações.
            </Text>
          </FormControl>

          <FormControl isInvalid={!!errors.aceiteTermoInscricao}>
            <Checkbox
              id="aceiteTermoInscricao"
              {...register('aceiteTermoInscricao', { required: 'Você deve aceitar o Termo de Inscrição' })}
            >
              Eu li e aceito o <Link href="https://drive.usercontent.google.com/download?id=1b2E9XKM9hiVi1gQNBcNNd-rxkcyT9UxA&export=download&authuser=0&confirm=t&uuid=a13148ac-4d1d-4e9b-a515-9713e237e4a7&at=AKSUxGMNxp8P7CRiwOanjC7up97B:1762280369882" isExternal color="blue.500">
                Termo de Inscrição <Icon as={ExternalLinkIcon} mx="2px" />
              </Link> (Obrigatório)
            </Checkbox>
            <FormErrorMessage>{errors.aceiteTermoInscricao && String(errors.aceiteTermoInscricao.message)}</FormErrorMessage>
          </FormControl>
        </VStack>


        <Divider />


        <Divider />

        <Flex justify="space-between" pt={4}>
          <Button onClick={onBack} variant="outline" >
            Voltar
          </Button>
          <Button
            type="submit"
            colorScheme="blue"
          >
            Prosseguir para Pagamento
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}

