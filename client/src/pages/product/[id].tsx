import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import Stripe from "stripe";
import { BagContext } from "../../contexts/BagContext";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface Product {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    defaultPriceId: string;
    price: string;
}

interface ProductProps {
    product: Product;
}

export default function Product({ product }: ProductProps) {

    const { addNewProduct } = useContext(BagContext);
    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Loading...</p>
    }

    function handleAddProductToBag(product: Product, amount: number) {

        const newProduct = {
            ...product,
            amount,
        };

        addNewProduct(newProduct);
    }

    return (
        <>
            <Head>
                <title>{`${product.name} | Ignite Shop`}</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <p>{product.description}</p>
                    <button onClick={() => handleAddProductToBag(product, 1)}>Colocar na sacola</button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.images[0],
                defaultPriceId: price.id,
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(price.unit_amount / 100),
            }
        },
        revalidate: 60 * 60 * 1 // 1 hour
    }
}