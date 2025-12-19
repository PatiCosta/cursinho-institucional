import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Step,
    StepIcon,
    StepIndicator,
    Stepper,
    StepSeparator,
    StepStatus,
    Text,
    useDisclosure,
    useSteps,
    VStack,
    Box,
    Heading,
    useToast,
    Flex
} from "@chakra-ui/react";
import { HeartStraight, CreditCard, Lock } from "phosphor-react";
import { format } from "date-fns";
import { useState } from "react";
import { AddressForm } from "./addressForm";
import { ContactForm } from "./contactForm";
import { DonationFormHeader } from "./DonationFormHeader";
import { PersonalDataForm } from "./personalDataForm";
import api from "@/services/api";
import { formatCep } from "@/utils/cepUtils";
import { Success } from "./success"; // Mantendo, caso queira usar no retorno, mas o Stripe redireciona para outra URL

interface Product {
    product_id: string
    price: number
}

interface DonationFormProps {
    cycles: number;
    product: Product
}

// Passos atualizados
const steps = ['Dados pessoais', 'Contato', 'Endereço', 'Pagamento']

export function DonationForm({ cycles, product }: DonationFormProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    const activeStepText = steps[activeStep]
    const [isRedirecting, setIsRedirecting] = useState(false)
    const toast = useToast()

    // Estados do Formulário
    const [name, setName] = useState<string>()
    const [gender, setGender] = useState<string>()
    const [birth, setBirth] = useState<string>(format(new Date(), 'yyyy-MM-dd'))
    const [rg, setRg] = useState<string>("")
    const [ufrg, setUfrg] = useState<string>("Não informado")
    const [documentType, setDocumentType] = useState<'cpf' | 'cnpj'>('cpf')
    const [documentNumber, setDocumentNumber] = useState<string>("")

    const [email, setEmail] = useState<string>()
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [isPhoneWhatsapp, setIsPhoneWhatsapp] = useState<boolean>(false)

    const [zipCode, setZipCode] = useState<string>()
    const [street, setStreet] = useState<string>()
    const [homeNumber, setHomeNumber] = useState<string>()
    const [complement, setComplement] = useState<string>()
    const [district, setDistrict] = useState<string>()
    const [state, setState] = useState<string>()
    const [city, setCity] = useState<string>()

    // Validações
    const isDisabledPersonalData = !name || name.length <= 5 || !birth || !documentNumber || documentNumber.length < 11
    const isDisabledContact = !email || !phoneNumber || phoneNumber.length < 10 || !email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    const isDisabledAddress = !zipCode || zipCode.length < 8 || !street || !homeNumber || homeNumber.length < 1 || !district || !state || !city

    // Função de Envio para o Checkout do Stripe
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsRedirecting(true);

        try {
            const payload = {
                name: name,
                email: email,
                cpf: documentNumber, // Assumindo CPF por padrão
                phone: phoneNumber,
                value: Math.round(product.price * 100), // Valor em centavos
                interval: (cycles > 1 || cycles === 0) ? 'monthly' : 'one_time',
                cycles: cycles, // ADICIONADO: Envia o número de ciclos (ex: 3)
                // Dados Extras para Cadastro
                rg: rg,
                ufrg: ufrg,
                gender: gender,
                birth: format(new Date(birth.replaceAll('-', '/')), 'dd/MM/yyyy'),
                isPhoneWhatsapp: isPhoneWhatsapp,
                zipCode: formatCep(zipCode),
                street: street,
                homeNumber: homeNumber,
                complement: complement,
                district: district,
                city: city,
                state: state,
            };

            // Chama a NOVA rota de checkout
            const response = await api.post("/donates/checkout", payload);

            if (response.data.url) {
                // Redireciona para o Stripe
                window.location.href = response.data.url;
            } else {
                throw new Error("URL de checkout não retornada");
            }

        } catch (error) {
            console.error(error);
            toast({
                title: 'Erro ao iniciar pagamento',
                description: 'Tente novamente mais tarde.',
                status: 'error'
            });
            setIsRedirecting(false);
        }
    }

    return (
        <>
            <Button
                bgColor='yellow.400'
                borderRadius='2xl'
                size={{ base: 'sm', lg: 'lg' }}
                display='flex'
                alignItems='center'
                gap={2}
                fontSize='24px'
                fontWeight='semibold'
                _hover={{ bgColor: 'yellow.500' }}
                onClick={onOpen}
                isDisabled={!product}
            >
                <Text>Doe agora</Text>
                <HeartStraight size={28} color="#023047" weight="duotone" />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
                <ModalOverlay />

                <ModalContent minH='600px' as='form' onSubmit={handleSubmit}>
                    <DonationFormHeader price={product.price} cycles={cycles} />
                    <ModalCloseButton color='gray.50' />
                    <ModalBody px={{ base: 6, lg: 16 }} pb={4}>
                        <Stepper size='sm' index={activeStep} gap='0' mt={6} colorScheme='yellow'>
                            {steps.map((step, index) => (
                                <Step key={index} style={{ gap: '0' }}>
                                    <StepIndicator>
                                        <StepStatus complete={<StepIcon />} />
                                    </StepIndicator>
                                    <StepSeparator style={{ marginLeft: 0 }} />
                                </Step>
                            ))}
                        </Stepper>
                        <Text fontWeight='bold' fontSize={{ base: 14, lg: 16 }} letterSpacing='1.2' color='gray.600' mt={2} mb={8}>
                            Passo {activeStep + 1}: {activeStepText}
                        </Text>

                        {/* STEPS */}
                        {activeStep === 0 &&
                            <PersonalDataForm
                                name={name} setName={setName} birth={birth} setBirth={setBirth}
                                documentNumber={documentNumber} setDocumentNumber={setDocumentNumber}
                                documentType={documentType} setDocumentType={setDocumentType}
                                gender={gender} setGender={setGender} rg={rg} setRg={setRg}
                                ufrg={ufrg} setUfrg={setUfrg}
                            />
                        }
                        {activeStep === 1 &&
                            <ContactForm
                                email={email} setEmail={setEmail} phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber} isPhoneWhatsapp={isPhoneWhatsapp}
                                setIsPhoneWhatsapp={setIsPhoneWhatsapp}
                            />
                        }
                        {activeStep === 2 &&
                            <AddressForm
                                city={city} complement={complement} district={district} homeNumber={homeNumber}
                                state={state} street={street} zipCode={zipCode} setHomeNumber={setHomeNumber}
                                setComplement={setComplement} setZipCode={setZipCode} setCity={setCity}
                                setDistrict={setDistrict} setState={setState} setStreet={setStreet}
                            />
                        }

                        {/* NOVO PASSO DE CONFIRMAÇÃO DE PAGAMENTO */}
                        {activeStep === 3 && (
                            <VStack spacing={6} py={8} textAlign="center">
                                <Box>
                                    <Heading size="md" color="blue.800">Tudo pronto!</Heading>
                                    <Text color="gray.600" mt={2}>
                                        Você será redirecionado para o ambiente seguro do Stripe para finalizar sua doação.
                                    </Text>
                                </Box>

                                <Box p={6} bg="gray.50" borderRadius="lg" border="1px solid" borderColor="gray.200" w="100%">
                                    <VStack spacing={2}>
                                        <Text fontSize="lg" fontWeight="bold">Resumo da Doação</Text>
                                        <Text>Valor: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Text>
                                        <Text>Tipo: {cycles > 1 ? 'Mensal (Recorrente)' : 'Única'}</Text>
                                    </VStack>
                                </Box>

                                <Flex align="center" gap={2} color="green.600" fontSize="sm">
                                    <Lock size={20} weight="fill" />
                                    <Text>Pagamento 100% Seguro</Text>
                                </Flex>
                            </VStack>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        {activeStep !== 0 && (
                            <Button
                                colorScheme='gray'
                                onClick={() => setActiveStep(activeStep - 1)}
                                mr={4} mt={8}
                                isDisabled={isRedirecting}
                            >
                                ← Anterior
                            </Button>
                        )}

                        {activeStep !== steps.length - 1 ? (
                            <Button
                                bgColor='yellow.400'
                                _hover={{ bgColor: 'yellow.500' }}
                                onClick={() => setActiveStep(activeStep + 1)}
                                mt={8}
                                isDisabled={activeStep === 0 ? isDisabledPersonalData : activeStep === 1 ? isDisabledContact : isDisabledAddress}
                            >
                                Próximo →
                            </Button>
                        ) : (
                            <Button
                                bgColor='green.400'
                                color="white"
                                display='flex'
                                alignItems='center'
                                gap={2}
                                fontWeight='bold'
                                _hover={{ bgColor: 'green.500' }}
                                mt={8}
                                type='submit'
                                isLoading={isRedirecting}
                                loadingText="Redirecionando..."
                            >
                                <Text>Ir para Pagamento Seguro</Text>
                                <CreditCard size={24} color="white" weight="fill" />
                            </Button>
                        )}
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </>
    )
}