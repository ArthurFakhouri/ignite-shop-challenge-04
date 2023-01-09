import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Stripe from "stripe";
import { BagContext } from "../contexts/BagContext";
import { stripe } from "../lib/stripe";
import { ImageContainer, Images, SuccessContainer } from "../styles/pages/purchase";

interface PurchaseProps {
    customerName: string;
    products: {
        name: string;
        imageUrl: string;
        amount: number;
    }[]
}

export default function Purchase({ customerName, products }: PurchaseProps) {

    const { emptyCartItems } = useContext(BagContext);

    useEffect(() => {
        emptyCartItems();
    }, [])

    const totalItems = products.reduce((prvValue, curValue) => prvValue + curValue.amount, 0)
    const name = products.length > 1 ? `compra de ${totalItems} camisetas` : `${products[0].name}`;

    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <Images>
                    {products.map((product, index) => {
                        if (index > -1) {
                            return (
                                <ImageContainer key={product.imageUrl}>
                                    <Image src={product.imageUrl} alt="" width={130} height={140} />
                                </ImageContainer>
                            )
                        }
                        return null;
                    }
                    )}
                </Images>

                <h1>Compra efetuada!</h1>

                <p>
                    Uhull <strong>{customerName}</strong>, sua {name} já está a caminho da sua casa.
                </p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const customerName = session.customer_details.name;
    const products = session.line_items.data.map(item => {
        const product = item.price.product as Stripe.Product
        return {
            name: product.name,
            imageUrl: product.images[0],
            amount: item.quantity
        }
    });

    return {
        props: {
            customerName,
            products
        }
    }
}