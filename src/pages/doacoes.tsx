import { Donate } from "@/components/doacoes/donate";
import { Main } from "@/components/doacoes/main";
import { Objective } from "@/components/doacoes/objective";
import Footer from "@/components/Footer";
import { DonationFooter } from "@/components/Footer/donation";
import Header from "@/components/Header";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import Head from "next/head";

// Atualizamos a interface para incluir o nome
interface Product {
    product_id: string
    price: number
    name: string // NOVO CAMPO
}

interface DonationsProps {
    products: Product[]
}

export default function Doacoes(props: DonationsProps) {
    return (
        <>
            <Head>
                <title>Doações | Cursinho FEA USP</title>
            </Head>
            <Header />
            <Main />
            <Objective />
            <Donate products={props.products}  />
            <Footer mt={{base: 40, lg: 64}}>
                <DonationFooter />
            </Footer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Buscamos produtos ativos e com o metadado correto
    const response = await stripe.products.search({
        query: 'active:\'true\' AND metadata[\'productType\']:\'donation\'', 
        expand: ['data.default_price']
    })
    
    const products = response.data.map(product => {
        const product_id = product.id
        const default_price = product.default_price as unknown as Stripe.Price
        const price = default_price.unit_amount ? default_price.unit_amount/100 : 0
        const name = product.name // Pegamos o nome do Stripe

        return {
            product_id,
            price,
            name // Retornamos o nome
        }
    })
    
    // Opcional: Ordenar por preço (menor para maior) para a lista ficar bonita
    products.sort((a, b) => a.price - b.price);

    return {
        props: {
            products
        }
    }
}