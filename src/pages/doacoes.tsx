import { Donate } from "@/components/doacoes/donate";
import { Main } from "@/components/doacoes/main";
import { Objective } from "@/components/doacoes/objective";
import Footer from "@/components/Footer";
import { DonationFooter } from "@/components/Footer/donation";
import Header from "@/components/Header";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface Product {
    product_id: string
    price: number
}

interface DonationsProps {
    products: Product[]
}

export default function Doacoes(props: DonationsProps) {
    return (
        <>
            <Header />
            <Main />
            <Objective />
            <Donate products={props.products}  />
            <Footer mt={{base: 64, lg: 64}}>
                <DonationFooter />
            </Footer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.search({query: 'metadata[\'productType\']:\'donation\'', expand: ['data.default_price']})
    const products = response.data.map(product => {
        const product_id = product.id
        const default_price = product.default_price as unknown as Stripe.Price
        const price = default_price.unit_amount ? default_price.unit_amount/100 : 0

        return {
            product_id,
            price
        }
    })

    // const default_prices = response.data.map(product => product.default_price) as unknown as Stripe.Price[]
    // const prices = default_prices.map(price => price.unit_amount ? price.unit_amount/100 : 0)

    return {
        props: {
            products
        }
    }
}