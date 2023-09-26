import PrivacyPolicy from '@/components/PrivacyPolicy'
import { fetchDataFromApi } from '@/utils/api'
import React from 'react'


const privacy = (pap) => {
  return (
    <div>
        <PrivacyPolicy pap={pap} />
    </div>
  )
}

export async function getStaticProps(params) {
  const pap = await fetchDataFromApi("/api/privacy-and-policy?populate=*");

  return {
    props: {pap},
  };
}

export default privacy