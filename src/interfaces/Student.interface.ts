interface purcharsedSubscriptions {
  schoolClassID: string
  productID: string
  productName: string
  paymentMethod: string
  paymentStatus: string
  paymentDate: Date | null
  valuePaid: number
}

export interface Student {
  id?: string
  name: string // ok
  email: string // ok
  gender: string // ok
  birth: string // ok
  phoneNumber: string // ok
  isPhoneWhatsapp: boolean // ok

  state: string // ok
  city: string // ok
  street: string // ok
  homeNumber: string // ok
  complement: string | null // ok
  district: string // ok
  zipCode: string // ok

  cpf: string // ok
  rg?: string // ok
  ufrg?: string // ok
  selfDeclaration: string // ok
  oldSchool: string // ok
  oldSchoolAdress: string // ok
  highSchoolGraduationDate: string // ok
  highSchoolPeriod: string
  metUsMethod: string // ok
  exStudent: string // ok
  stripeCustomerID?: string

  purcharsedSubscriptions: purcharsedSubscriptions[]
  createdAt: Date
}
