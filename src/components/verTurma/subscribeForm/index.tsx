import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Step, StepIcon, StepIndicator, Stepper, StepSeparator, StepStatus, Text, useDisclosure, useSteps } from "@chakra-ui/react";
import {HeartStraight} from "phosphor-react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Stripe from "stripe";
import crypto from "crypto-js";
import { AddressForm } from "./addressForm";
import { ContactForm } from "./contactForm";
import { SubscribeFormHeader } from "./SubscribeFormHeader";
import { PaymentForm } from "./paymentForm";
import api from "@/services/api";
import { formatCep } from "@/utils/cepUtils";
import { Success } from "./success";
import { GeneralDataForm } from "./GeneralDataForm";
import { EducationForm } from "./EducationForm";


// interface Product {
//     product_id: string
//     price: number
// }

interface SubscribeFormProps {
    id: string | undefined;
    color: string;
    title: string;
    price: number;
    stripeProductID: string;
}

const steps = ['Dados gerais', 'Contato', 'Endereço', 'Escolaridade', 'Pagamento']

export function SubscribeForm({id, color, title, price, stripeProductID}: SubscribeFormProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    const activeStepText = steps[activeStep]
    const [stripe, setStripe] = useState<Stripe | null>(null);
    const [subscribeSuccess, setSubscribeSuccess] = useState(false)
    const [isSubscribing, setIsSubscribing] = useState(false)

    const stripeKey = 'sk_test_51MtUqqHkzIzO4aMOHl5HftcEqP130gAuJvaJnH52pq3Znj1LWwjkx6WZwJPoQo7y8VvMxbgPqm6DMjdlhgl3aK1q00UQQ5q4r5'

    const [name, setName] = useState<string>()
    const [gender, setGender] = useState<string | undefined>()
    const [birth, setBirth] = useState<string>(format(new Date, 'yyyy-MM-dd'))
    const [rg, setRg] = useState<string | undefined>()
    const [ufrg, setUfrg] = useState<string>("Não informado")
    const [cpf, setCpf] = useState<string>("")
    const [selfDeclaration, setSelfDeclaration] = useState<string | undefined>()
    const [metUsMethod, setMetUsMethod] = useState<string | undefined>()
    const [exStudent, setExStudent] = useState<"sim" | "não">("não")

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

    const [oldSchool, setOldSchool] = useState<string | undefined>()
    const [oldSchoolAddress, setOldSchoolAddress] = useState<string | undefined>()
    const [highSchoolGraduationDate, setHighSchoolGraduationDate] = useState<string | undefined>(format(new Date, 'yyyy-MM-dd'))
    const [highSchoolPeriod, setHighSchoolPeriod] = useState<string | undefined>()

    const [card, setCard] = useState<string>("")
    const [monthExpire, setMonthExpire] = useState<string>("")
    const [yearExpire, setYearExpire] = useState<string>("")
    const [cvv, setCvv] = useState<string>("")

    const isDisabledPersonalData= !name || name.length <= 5 || !birth || cpf.length !== 11
    const isDisabledContact = !email || !phoneNumber || phoneNumber.length < 10 || !email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    const isDisabledAddress = !zipCode || zipCode.length < 8 || !street || !homeNumber || homeNumber.length < 1 || !district || !state || !city
    const isDisabledCheckout = card.length < 16 || monthExpire.length < 2 || yearExpire.length < 2 || cvv.length < 3
    const isDisabledScholarship = !oldSchool || !oldSchoolAddress || !highSchoolGraduationDate || !highSchoolPeriod

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
        setIsSubscribing(true)
    
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

        console.log(paymentMethod)

        // Encrypt the payment method with crypto-js
        const encryptedPaymentMethod = crypto.AES.encrypt(paymentMethod.id, "vasco").toString();
    
        // Send payment details to your backend
        try {
          const data = {
            name: name,
            email: email,
            rg: rg === undefined ? null : rg,
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
            cpf: cpf,
            selfDeclaration: selfDeclaration,
            oldSchool: oldSchool,
            oldSchoolAdress: oldSchoolAddress,
            highSchoolGraduationDate: highSchoolGraduationDate,
            highSchoolPeriod: highSchoolPeriod,
            metUsMethod: metUsMethod,
            exStudent: exStudent,
            purcharsedSubscriptions: [{schoolClassID: id}],
            token: encryptedPaymentMethod,
            productSelectedID: stripeProductID
          };

          await api.post("https://cursinho-fea-usp-2bib7.ondigitalocean.app/students/create",
            data);
            setIsSubscribing(false)
            setSubscribeSuccess(true)
    
        } catch (error) {
          console.log(error);
          setIsSubscribing(false)
        }
    }

    return (
        <>
            <Button 
                position='absolute' 
                bottom='0px'
                py={16}
                px={16} 
                size='lg' 
                bgColor='gray.50' 
                display={{base: 'none', lg: 'flex' }}
                gap={4}
                fontSize={20}
                borderRadius='2xl'
                _hover={{bgColor: 'gray.100'}}
                onClick={onOpen}
            >
                <Text fontWeight='bolder' letterSpacing={.5}>Quero me inscrever!</Text>
                <Text>→</Text>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
                <ModalOverlay />
                {
                    subscribeSuccess
                    ? <Success onClose={onClose} />
                    : <ModalContent minH='750px' as='form' onSubmit={handleSubmit}>
                        <SubscribeFormHeader color={color} title={title} price={price} />
                        <ModalCloseButton color='gray.50' />
                        <ModalBody px={{base: 6, lg: 16}} pb={4}>
                            <Stepper size='sm' index={activeStep} gap='0' mt={6} colorScheme='yellow'>
                                {steps.map((step, index) => (
                                    <Step key={index} style={{gap: '0'}}>
                                        <StepIndicator>
                                        <StepStatus complete={<StepIcon />} />
                                        </StepIndicator>
                                        <StepSeparator style={{marginLeft: 0}} />
                                    </Step>
                                ))}
                            </Stepper>
                            <Text
                                fontWeight='bold' 
                                fontSize={{base: 14, lg: 16}} 
                                letterSpacing='1.2' 
                                color='gray.600'
                                mt={2}
                                mb={4}
                            >
                                Passo {activeStep + 1}: {activeStepText}
                            </Text>
                            {activeStep === 0 &&                    
                                <GeneralDataForm 
                                    name={name}
                                    setName={setName}
                                    birth={birth}
                                    setBirth={setBirth}
                                    gender={gender}
                                    setGender={setGender}
                                    rg={rg}
                                    setRg={setRg}
                                    ufrg={ufrg}
                                    setUfrg={setUfrg}
                                    cpf={cpf}
                                    exStudent={exStudent}
                                    metUsMethod={metUsMethod}
                                    selfDeclaration={selfDeclaration}
                                    setCpf={setCpf}
                                    setExStudent={setExStudent}
                                    setMetUsMethod={setMetUsMethod}
                                    setSelfDeclaration={setSelfDeclaration}
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
                                <EducationForm 
                                    highSchoolGraduationDate={highSchoolGraduationDate}
                                    highSchoolPeriod={highSchoolPeriod}
                                    oldSchool={oldSchool} 
                                    oldSchoolAddress={oldSchoolAddress}
                                    setHighSchoolGraduationDate={setHighSchoolGraduationDate}
                                    setHighSchoolPeriod={setHighSchoolPeriod}
                                    setOldSchool={setOldSchool}
                                    setOldSchoolAddress={setOldSchoolAddress}
                                />
                            }
                            {activeStep === 4 &&                     
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
                                    isDisabled={
                                        activeStep === 0 ? isDisabledPersonalData 
                                        : activeStep === 1 ? isDisabledContact 
                                        : activeStep === 2 ? isDisabledAddress
                                        : isDisabledScholarship
                                    }
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
                                        isLoading={isSubscribing}
                                    >
                                        <Text>Inscrever-se</Text>
                                        <HeartStraight size={24} color="#023047" weight="duotone" />
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