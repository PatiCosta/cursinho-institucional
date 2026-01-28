import { useState, useCallback } from 'react'; // Import useCallback
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
  Link,
  Icon,
  Radio,
  RadioGroup,
  Stack,
  Flex
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { CreditCard, QrCode } from '@phosphor-icons/react';
import { Turma } from '@/types';
import axios from 'axios'; // Importar axios para a chamada do ViaCEP

// Interface para tipar corretamente o formulário
interface StudentFormData {
  nome: string;
  sobrenome: string;
  email: string;
  confirmacaoEmail: string;
  birth: string;
  gender: string;
  emailResponsavel?: string;
  cpf: string;
  rg: string;
  ufrg: string;
  phoneNumber: string;
  isPhoneWhatsapp: boolean;
  zipCode: string;
  street: string;
  homeNumber: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
  selfDeclaration: string;
  oldSchool: string;
  oldSchoolAdress: string;
  highSchoolGraduationDate: string;
  highSchoolPeriod: string;
  metUsMethod: string;
  exStudent: string;
  paymentMethod: 'pix' | 'credit_card';
  codigoDesconto?: string;
  aceiteTermoCiencia: boolean;
  aceiteTermoInscricao: boolean;
}

interface StudentFormProps {
  selectedTurma: Turma;
  onBack: () => void;
  onSubmit: (data: FieldValues) => Promise<void>;
  isSubmitting: boolean;
}

export function StudentForm({ selectedTurma, onBack, onSubmit, isSubmitting }: StudentFormProps) {
  const {
    handleSubmit,
    register,
    watch,
    setValue, 
    setFocus, // Para focar no número após preencher
    formState: { errors, isValid },
  } = useForm<StudentFormData>({ 
    mode: 'onBlur',
    defaultValues: {
      paymentMethod: 'pix' 
    }
  });

  const emailValue = watch('email');
  const paymentMethod = watch('paymentMethod');
  
  const [isMinor, setIsMinor] = useState(false);
  const [isLoadingCep, setIsLoadingCep] = useState(false); // Estado para loading do CEP

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

  // Função para buscar o CEP
  const handleCepBlur = useCallback(async (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');

    if (cep.length === 8) {
      setIsLoadingCep(true);
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (!response.data.erro) {
          setValue('street', response.data.logradouro);
          setValue('district', response.data.bairro);
          setValue('city', response.data.localidade);
          setValue('state', response.data.uf);
          setFocus('homeNumber'); // Move o foco para o número
        } else {
            // Opcional: Avisar que o CEP não foi encontrado
            // toast({ ... }) 
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      } finally {
        setIsLoadingCep(false);
      }
    }
  }, [setValue, setFocus]);

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
            <Input bg='gray.50' border={'1px solid gray'} id="nome" {...register('nome', { required: 'Nome é obrigatório' })} />
            <FormErrorMessage>{errors.nome && String(errors.nome.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.sobrenome}>
            <FormLabel htmlFor="sobrenome">Sobrenome</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} id="sobrenome" {...register('sobrenome', { required: 'Sobrenome é obrigatório' })} />
            <FormErrorMessage>{errors.sobrenome && String(errors.sobrenome.message)}</FormErrorMessage>
          </FormControl>
           <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} id="email" type="email" {...register('email', { required: 'Email é obrigatório' })} />
             <FormErrorMessage>{errors.email && String(errors.email.message)}</FormErrorMessage>
          </FormControl>
           <FormControl isInvalid={!!errors.confirmacaoEmail}>
            <FormLabel htmlFor="confirmacaoEmail">Confirme seu Email</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} 
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
            <Input bg='gray.50' border={'1px solid gray'} 
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
            <Select bg='gray.50' border={'1px solid gray'} id="gender" {...register('gender', { required: 'Gênero é obrigatório' })}>
              <option value="">Selecione...</option>
              <option value="Homem Cis">Homem Cis</option>
              <option value="Mulher Cis">Mulher Cis</option>
              <option value="Homem Trans">Homem Trans</option>
              <option value="Mulher Trans">Mulher Trans</option>
              <option value="Não binário">Não binário</option>
              <option value="Outro">Outro</option>
            </Select>
            <FormErrorMessage>{errors.gender && String(errors.gender.message)}</FormErrorMessage>
          </FormControl>

          {isMinor && (
            <FormControl isInvalid={!!errors.emailResponsavel} gridColumn="span 2">
              <FormLabel htmlFor="emailResponsavel">E-mail do Responsável (Obrigatório para menores de 18)</FormLabel>
              <Input bg='gray.50' border={'1px solid gray'} 
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
            <Input bg='gray.50' border={'1px solid gray'} id="cpf" {...register('cpf', { required: 'CPF é obrigatório' })} />
            <FormErrorMessage>{errors.cpf && String(errors.cpf.message)}</FormErrorMessage>
          </FormControl>
           <FormControl isInvalid={!!errors.rg}>
            <FormLabel htmlFor="rg">RG</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} id="rg" {...register('rg', { required: 'RG é obrigatório' })} />
            <FormErrorMessage>{errors.rg && String(errors.rg.message)}</FormErrorMessage>
          </FormControl>
            <FormControl isInvalid={!!errors.ufrg}>
            <FormLabel htmlFor="ufrg">UF do RG</FormLabel>
            <Select bg='gray.50' border={'1px solid gray'} id="ufrg" {...register('ufrg', { required: 'UF do RG é obrigatória' })}>
              <option value="">Selecione a UF</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </Select>
            <FormErrorMessage>{errors.ufrg && String(errors.ufrg.message)}</FormErrorMessage>
            </FormControl>
        </SimpleGrid>

        {/* --- Contato --- */}
        <Heading as="h3" size="md" pt={4}>Contato</Heading>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl isInvalid={!!errors.phoneNumber}>
                <FormLabel htmlFor="phoneNumber">Celular (com DDD)</FormLabel>
                <Input bg='gray.50' border={'1px solid gray'} id="phoneNumber" type="tel" {...register('phoneNumber', { required: 'Celular é obrigatório' })} />
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
                <Input bg='gray.50' border={'1px solid gray'} 
                    id="zipCode" 
                    {...register('zipCode', { 
                        required: 'CEP é obrigatório',
                        onBlur: handleCepBlur // Adicionado o handler de blur aqui
                    })} 
                    placeholder="00000-000"
                />
                {isLoadingCep && <Text fontSize="xs" color="blue.500">Buscando CEP...</Text>}
                <FormErrorMessage>{errors.zipCode && String(errors.zipCode.message)}</FormErrorMessage>
            </FormControl>
             <FormControl isInvalid={!!errors.street} gridColumn={{ base: 'span 1', sm: 'span 2' }}>
                <FormLabel htmlFor="street">Rua / Logradouro</FormLabel>
                <Input bg='gray.50' border={'1px solid gray'} id="street" {...register('street', { required: 'Rua é obrigatória' })} />
                <FormErrorMessage>{errors.street && String(errors.street.message)}</FormErrorMessage>
            </FormControl>
             <FormControl isInvalid={!!errors.homeNumber}>
                <FormLabel htmlFor="homeNumber">Número</FormLabel>
                <Input bg='gray.50' border={'1px solid gray'} id="homeNumber" {...register('homeNumber', { required: 'Número é obrigatório' })} />
                <FormErrorMessage>{errors.homeNumber && String(errors.homeNumber.message)}</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="complement">Complemento</FormLabel>
                <Input bg='gray.50' border={'1px solid gray'} id="complement" {...register('complement')} />
            </FormControl>
             <FormControl isInvalid={!!errors.district}>
                <FormLabel htmlFor="district">Bairro</FormLabel>
                <Input bg='gray.50' border={'1px solid gray'} id="district" {...register('district', { required: 'Bairro é obrigatório' })} />
                <FormErrorMessage>{errors.district && String(errors.district.message)}</FormErrorMessage>
            </FormControl>
             <FormControl isInvalid={!!errors.city}>
                <FormLabel htmlFor="city">Cidade</FormLabel>
                <Input bg='gray.50' border={'1px solid gray'} id="city" {...register('city', { required: 'Cidade é obrigatória' })} />
                <FormErrorMessage>{errors.city && String(errors.city.message)}</FormErrorMessage>
            </FormControl>
             <FormControl isInvalid={!!errors.state}>
                <FormLabel htmlFor="state">Estado</FormLabel>
                <Input bg='gray.50' border={'1px solid gray'} id="state" {...register('state', { required: 'Estado é obrigatório' })} />
                <FormErrorMessage>{errors.state && String(errors.state.message)}</FormErrorMessage>
            </FormControl>
        </SimpleGrid>

        {/* --- Informações Adicionais --- */}
        <Heading as="h3" size="md" pt={4}>Informações Adicionais</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl isInvalid={!!errors.selfDeclaration}>
            <FormLabel htmlFor="selfDeclaration">Autodeclaração</FormLabel>
            <Select bg='gray.50' border={'1px solid gray'} id="selfDeclaration" {...register('selfDeclaration', { required: 'Campo obrigatório' })}>
              <option value="">Selecione...</option>
              <option value="Branco">Branco</option>
              <option value="Preto">Preto</option>
              <option value="Pardo">Pardo</option>
              <option value="Indígena">Indígena</option>
              <option value="Amarelo">Amarelo</option>
              <option value="Outro">Outro</option>
            </Select>
            <FormErrorMessage>{errors.selfDeclaration && String(errors.selfDeclaration.message)}</FormErrorMessage>
            </FormControl>
          {/* <FormControl isInvalid={!!errors.oldSchool}>
            <FormLabel htmlFor="oldSchool">Escola em que cursou o Ensino Médio</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} id="oldSchool" {...register('oldSchool', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.oldSchool && String(errors.oldSchool.message)}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.oldSchoolAdress}>
            <FormLabel htmlFor="oldSchoolAdress">Endereço da Escola</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} id="oldSchoolAdress" {...register('oldSchoolAdress', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.oldSchoolAdress && String(errors.oldSchoolAdress.message)}</FormErrorMessage>
          </FormControl> */}
          <FormControl isInvalid={!!errors.highSchoolGraduationDate}>
            <FormLabel htmlFor="highSchoolGraduationDate">Ano de Conclusão do E.M.</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} id="highSchoolGraduationDate" type="number" {...register('highSchoolGraduationDate', { required: 'Campo obrigatório' })} />
            <FormErrorMessage>{errors.highSchoolGraduationDate && String(errors.highSchoolGraduationDate.message)}</FormErrorMessage>
          </FormControl>
            <FormControl isInvalid={!!errors.highSchoolPeriod}>
            <FormLabel htmlFor="highSchoolPeriod">Período do Ensino Médio</FormLabel>
            <Select 
              bg='gray.50' 
              border={'1px solid gray'} 
              id="highSchoolPeriod" 
              placeholder="Selecione o período..."
              {...register('highSchoolPeriod', { required: 'O período do Ensino Médio é obrigatório' })}
            >
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
              <option value="Integral">Integral</option>
            </Select>
            <FormErrorMessage>{errors.highSchoolPeriod && String(errors.highSchoolPeriod.message)}</FormErrorMessage>
            </FormControl>
           <FormControl isInvalid={!!errors.metUsMethod}>
            <FormLabel htmlFor="metUsMethod">Como nos conheceu?</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} id="metUsMethod" {...register('metUsMethod', { required: 'Campo obrigatório' })} />
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

        {/* --- Pagamento --- */}
        <Heading as="h3" size="md" pt={4}>Pagamento</Heading>
        
        {/* SELEÇÃO DE MÉTODO DE PAGAMENTO (ATUALIZADA PARA INCLUIR DÉBITO) */}
        <FormControl isInvalid={!!errors.paymentMethod} mb={4}>
            <FormLabel>Forma de Pagamento</FormLabel>
            <RadioGroup defaultValue="pix" value={paymentMethod}>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Box 
                    borderWidth="2px" 
                    borderColor={paymentMethod === 'pix' ? 'green.400' : 'gray.200'}
                    borderRadius="lg" 
                    p={4} 
                    cursor="pointer"
                    bg={paymentMethod === 'pix' ? 'green.50' : 'transparent'}
                    _hover={{ borderColor: 'green.300', bg: 'green.50' }}
                    onClick={() => setValue('paymentMethod', 'pix')}
                    w="100%"
                >
                    <Radio value="pix" {...register('paymentMethod')}>
                    <Flex alignItems="center" gap={3}>
                        <Icon as={QrCode} boxSize={8} color="green.500" />
                        <Box>
                            <Text fontWeight="bold" color="green.800">PIX</Text>
                            <Text fontSize="sm" color="green.600">Aprovação imediata</Text>
                        </Box>
                    </Flex>
                    </Radio>
                </Box>

                <Box 
                    borderWidth="2px" 
                    borderColor={paymentMethod === 'credit_card' ? 'blue.400' : 'gray.200'}
                    borderRadius="lg" 
                    p={4} 
                    cursor="pointer"
                    bg={paymentMethod === 'credit_card' ? 'blue.50' : 'transparent'}
                    _hover={{ borderColor: 'blue.300', bg: 'blue.50' }}
                    onClick={() => setValue('paymentMethod', 'credit_card')}
                    w="100%"
                >
                    <Radio value="credit_card" {...register('paymentMethod')}>
                    <Flex alignItems="center" gap={3}>
                        <Icon as={CreditCard} boxSize={8} color="blue.500" />
                        <Box>
                            <Text fontWeight="bold" color="blue.800">Cartão de Crédito / Débito</Text>
                            <Text fontSize="sm" color="blue.600">Pagamento seguro via Asaas</Text>
                        </Box>
                    </Flex>
                    </Radio>
                </Box>
                </Stack>
            </RadioGroup>
        </FormControl>

         <FormControl isInvalid={!!errors.codigoDesconto}>
            <FormLabel htmlFor="codigoDesconto">Código de Desconto (Opcional)</FormLabel>
            <Input bg='gray.50' border={'1px solid gray'} id="codigoDesconto" {...register('codigoDesconto')} />
            <FormErrorMessage>{errors.codigoDesconto && String(errors.codigoDesconto.message)}</FormErrorMessage>
          </FormControl>

        {/* --- Termos de Aceite --- */}
        <Heading as="h3" size="md" pt={4}>Termos de Aceite</Heading>
        <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={!!errors.aceiteTermoCiencia}>
                <Checkbox 
                    id="aceiteTermoCiencia"
                    {...register('aceiteTermoCiencia', { required: 'Você deve aceitar o Termo de Ciência' })}
                >
                    Eu li e aceito o <Text as="span" color="blue.500">Termo de Ciência</Text> (Obrigatório)
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
                    Eu li e aceito o <Link href="#" isExternal color="blue.500">
                        Termo de Inscrição <Icon as={ExternalLinkIcon} mx="2px" />
                    </Link> (Obrigatório)
                </Checkbox>
                <FormErrorMessage>{errors.aceiteTermoInscricao && String(errors.aceiteTermoInscricao.message)}</FormErrorMessage>
            </FormControl>
        </VStack>


        <Divider />
        
        <Flex justify="space-between" pt={4}>
          <Button onClick={onBack} variant="outline" isDisabled={isSubmitting}>
            Voltar
          </Button>
          <Button
            type="submit"
            colorScheme={paymentMethod === 'credit_card' ? 'blue' : 'green'}
            isLoading={isSubmitting}
            isDisabled={!isValid || isSubmitting}
          >
            {paymentMethod === 'credit_card' ? 'Ir para Pagamento (Stripe)' : 'Gerar PIX'}
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}