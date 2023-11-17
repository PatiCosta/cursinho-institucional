import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Step, StepIcon, StepIndicator, Stepper, StepSeparator, StepStatus, Text, useDisclosure, useSteps } from "@chakra-ui/react";
import {HeartStraight} from "phosphor-react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Stripe from "stripe";
import crypto from "crypto-js";
import { AddressForm } from "./addressForm";
import { ContactForm } from "./contactForm";
import { DonationFormHeader } from "./DonationFormHeader";
import { PaymentForm } from "./paymentForm";
import { PersonalDataForm } from "./personalDataForm";
import api from "@/services/api";
import { formatCep } from "@/utils/cepUtils";
import { Success } from "./success";


interface Product {
    product_id: string
    price: number
}

interface DonationFormProps {
    cycles: number;
    product: Product
}

const steps = ['Dados pessoais', 'Contato', 'Endereço', 'Pagamento']

export function DonationForm({cycles, product}: DonationFormProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    const activeStepText = steps[activeStep]
    const [stripe, setStripe] = useState<Stripe | null>(null);
    const [donateSuccess, setDonateSuccess] = useState(false)
    const [isDonating, setIsDonating] = useState(false)

    const stripeKey = 'sk_test_51MtUqqHkzIzO4aMOHl5HftcEqP130gAuJvaJnH52pq3Znj1LWwjkx6WZwJPoQo7y8VvMxbgPqm6DMjdlhgl3aK1q00UQQ5q4r5'

    const [name, setName] = useState<string>()
    const [gender, setGender] = useState<string>()
    const [birth, setBirth] = useState<string>(format(new Date, 'yyyy-MM-dd'))
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

    const [card, setCard] = useState<string>("")
    const [monthExpire, setMonthExpire] = useState<string>("")
    const [yearExpire, setYearExpire] = useState<string>("")
    const [cvv, setCvv] = useState<string>("")

    const isDisabledPersonalData= !name || name.length <= 5 || !birth || !documentNumber || documentNumber.length < 11
    const isDisabledContact = !email || !phoneNumber || phoneNumber.length < 10 || !email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    const isDisabledAddress = !zipCode || zipCode.length < 8 || !street || !homeNumber || homeNumber.length < 1 || !district || !state || !city
    const isDisabledCheckout = card.length < 16 || monthExpire.length < 2 || yearExpire.length < 2 || cvv.length < 3

    useEffect(() => {
        const fetchStripe = async () => {
          const stripe = new Stripe(stripeKey,
            { apiVersion: '2023-10-16' });
          setStripe(stripe);
        };
        fetchStripe();
      }, []);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsDonating(true)
    
        if (!stripe) {
          console.error("Stripe is not initialized");
          return;
        }

        // Create a payment method
        const paymentMethod = await stripe.paymentMethods.create({
          type: 'card',
          card: {
            number: card,
            exp_month: Number(monthExpire),
            exp_year: Number(yearExpire),
            cvc: cvv
          },
        })
        // Encrypt the payment method with crypto-js
        const encryptedPaymentMethod = crypto.AES.encrypt(paymentMethod.id, "vasco").toString();
    
        // Send payment details to your backend
        try {
          const data = {
            name: name,
            email: email,
            rg: rg.length < 9   ? 'Não informado' : rg,
            ufrg: ufrg,
            phoneNumber: phoneNumber,
            gender: gender,
            birth: format(new Date(birth.replaceAll('-', '/')), 'dd/MM/yyyy'),
            isPhoneWhatsapp: isPhoneWhatsapp,
            state: state,
            city: city,
            street: street,
            homeNumber: homeNumber,
            complement: complement,
            district: district,
            zipCode: formatCep(zipCode),
            cnpj: documentType === 'cnpj' ? documentNumber : 'Não informado',
            cpf: documentType === 'cpf' ? documentNumber : 'Não informado',
            valuePaid: product.price,
            productSelectedID: product.product_id,
            cycles: cycles,
            token: encryptedPaymentMethod,
          };

          await api.post("https://cursinho-fea-usp-2bib7.ondigitalocean.app/donates/create",
            data);
            setIsDonating(false)
            setDonateSuccess(true)
    
        } catch (error) {
          console.log(error);
          setIsDonating(false)
        }
    }

    return (
        <>
            <Button 
                bgColor='yellow.400' 
                borderRadius='2xl' 
                size={{base: 'sm', lg: 'lg'}} 
                display='flex' 
                alignItems='center' 
                gap={2} 
                fontSize='24px' 
                fontWeight='semibold'
                _hover={{
                    bgColor: 'yellow.500'
                }}
                onClick={onOpen}
                isDisabled={!product}
            >
                <Text>Doe agora</Text>
                <HeartStraight size={28} color="#023047" weight="duotone" />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
                <ModalOverlay />
                {
                    donateSuccess
                    ? <Success onClose={onClose} />
                    : <ModalContent minH='750px' as='form' onSubmit={handleSubmit}>
                        <DonationFormHeader price={product.price} cycles={cycles} />
                        <ModalCloseButton color='gray.50' />
                        <ModalBody px={16} pb={4}>
                            <Stepper size='sm' index={activeStep} gap='0' mt={6} colorScheme='yellow'>
                                {steps.map((step, index) => (
                                    <Step key={index}>
                                        <StepIndicator>
                                        <StepStatus complete={<StepIcon />} />
                                        </StepIndicator>
                                        <StepSeparator />
                                    </Step>
                                ))}
                            </Stepper>
                            <Text
                                fontWeight='bold' 
                                fontSize={{base: 10, lg: 16}} 
                                letterSpacing='1.2' 
                                color='gray.600'
                                mt={2}
                                mb={8}
                            >
                                Passo {activeStep + 1}: {activeStepText}
                            </Text>
                            {activeStep === 0 &&                    
                                <PersonalDataForm 
                                    name={name}
                                    setName={setName}
                                    birth={birth}
                                    setBirth={setBirth}
                                    documentNumber={documentNumber}
                                    setDocumentNumber={setDocumentNumber}
                                    documentType={documentType}
                                    setDocumentType={setDocumentType}
                                    gender={gender}
                                    setGender={setGender}
                                    rg={rg}
                                    setRg={setRg}
                                    ufrg={ufrg}
                                    setUfrg={setUfrg}
                                />
                            }
                            {activeStep === 1 &&                    
                                <ContactForm 
                                    email={email}
                                    setEmail={setEmail}
                                    phoneNumber={phoneNumber}
                                    setPhoneNumber={setPhoneNumber}
                                    isPhoneWhatsapp={isPhoneWhatsapp}
                                    setIsPhoneWhatsapp={setIsPhoneWhatsapp}
                                />
                            }
                            {activeStep === 2 &&                    
                                <AddressForm 
                                    city={city}
                                    complement={complement}
                                    district={district}
                                    homeNumber={homeNumber}
                                    state={state}
                                    street={street}
                                    zipCode={zipCode}
                                    setHomeNumber={setHomeNumber}
                                    setComplement={setComplement}
                                    setZipCode={setZipCode}
                                    setCity={setCity}
                                    setDistrict={setDistrict}
                                    setState={setState}
                                    setStreet={setStreet}
                                />
                            }
                            {activeStep === 3 &&                     
                                <PaymentForm 
                                    card={card}
                                    setCard={setCard}
                                    cvv={cvv}
                                    setCvv={setCvv}
                                    monthExpire={monthExpire}
                                    setMonthExpire={setMonthExpire}
                                    yearExpire={yearExpire}
                                    setYearExpire={setYearExpire}
                                />
                            }
                        </ModalBody>
                        <ModalFooter>
                            {activeStep !== 0 && (
                                <Button
                                    colorScheme='gray'
                                    onClick={() => setActiveStep(activeStep - 1)}
                                    mr={4}
                                    mt={8}
                                >
                                    ← Anterior
                                </Button>
                            )}
                            {activeStep !== steps.length - 1 && (
                                <Button
                                    bgColor='yellow.400'
                                    _hover={{
                                        bgColor: 'yellow.500'
                                    }}
                                    onClick={() => setActiveStep(activeStep + 1)}
                                    mt={8}
                                    isDisabled={activeStep === 0 ? isDisabledPersonalData : activeStep === 1 ? isDisabledContact : isDisabledAddress}
                                >
                                    Próximo →
                                </Button>
                            )}
                            {activeStep === steps.length - 1 && (
                                <>                        
                                    <Button 
                                        bgColor='yellow.400' 
                                        display='flex' 
                                        alignItems='center' 
                                        gap={2} 
                                        fontWeight='semibold'
                                        _hover={{
                                            bgColor: 'yellow.500'
                                        }}
                                        mt={8}
                                        isDisabled={isDisabledCheckout}
                                        type='submit'
                                        isLoading={isDonating}
                                    >
                                        <Text>Doar</Text>
                                        <HeartStraight size={28} color="#023047" weight="duotone" />
                                    </Button>
                                </>
                            )}
                        </ModalFooter>
                    </ModalContent>
                }
            </Modal>
        </>
    )
}