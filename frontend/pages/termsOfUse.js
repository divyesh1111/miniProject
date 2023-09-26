import React from 'react'
import TermsOfUse from '@/components/TermsOfUse'
import { fetchDataFromApi } from '@/utils/api';



const termsOfUse = (tou) => {
  return (
    <div>
        <TermsOfUse tou={tou} />
    </div>
  )
}

export async function getStaticProps(params) {
  const tou = await fetchDataFromApi("/api/terms-of-use?populate=*");

  return {
    props: {tou},
  };
}

export default termsOfUse