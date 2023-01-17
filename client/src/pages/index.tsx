import { AddToHandbag, Details, HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from "next/image";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { useContext, useState } from "react";
import { Handbag } from "phosphor-react";
import { Arrow } from "../components/pages/home/Arrow";
import { BagContext } from "../contexts/BagContext";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  defaultPriceId: string;
  price: string;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const { addNewProduct } = useContext(BagContext);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  function handleAddProductToBag(event: React.MouseEvent<HTMLButtonElement>, product: Product, amount: number) {
    event.preventDefault();

    const newProduct = {
      ...product,
      amount
    };

    addNewProduct(newProduct);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer>
        <div ref={sliderRef} className="keen-slider">
          {products.map(product =>
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt={product.name} priority />
                <footer>
                  <Details>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </Details>
                  <AddToHandbag aria-label="AddToHandbag" onClick={(event) => handleAddProductToBag(event, product, 1)}>
                    <Handbag weight="bold" size={32} />
                  </AddToHandbag>
                </footer>
              </Product>
            </Link>
          )}
        </div>
        {loaded && instanceRef.current && (
          <>
            {currentSlide !== 0 &&
              <Arrow onClick={() => { instanceRef.current?.prev() }} left />}
            {currentSlide !== (instanceRef.current.track.details.slides.length - 2) &&
              <Arrow onClick={() => { instanceRef.current?.next() }} />}
          </>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    const priceUnitAmount = price.unit_amount ? price.unit_amount : 0;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(priceUnitAmount / 100),
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}