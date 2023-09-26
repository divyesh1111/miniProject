import TermsOfSale from '@/components/TermsOfSale'
import React from 'react'
import { fetchDataFromApi } from '@/utils/api';

const termsOfSale = (tos) => {
  return (
    <div>
        <TermsOfSale tos={tos} />
    </div>
  )
}

export async function getStaticProps(params) {
    const tos = await fetchDataFromApi("/api/terms-of-sale?populate=*");
  
    return {
      props: {tos},
    };
  }

export default termsOfSale