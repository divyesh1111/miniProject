import React from 'react'
import Wrapper from './Wrapper'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const TermsOfUse = ({tou}) => {
  return (
    <Wrapper>
        <div className='text-center text-2xl md:text-[35px] font-bold py-4'> NIKE TERMS OF USE</div>
      <div className=" text-justify  mx-auto px-6 py-6 h-[100%] w-[100] border border-gray-900 rounded-3xl  my-8">
        
        <div className='px-3 md:text-2xl text-gray-500'>
        PLEASE READ THESE TERMS OF USE (“TERMS”) CAREFULLY BEFORE USING ANY NIKE PLATFORM.
        <br></br>

        <ReactMarkdown>
                                {tou?.tou.data?.attributes?.tou}
                            </ReactMarkdown>
{/* 
        <div className='mt-5'>If you live in any of the following countries or regions, additional terms may apply to you and are viewable at the bottom of these Terms. We display the country/region within the Terms when applicable.  These additional terms override the Terms below to the extent of any inconsistency.</div>
        <div className='mt-5'>
        Argentina, Australia, Brazil, Canada, Colombia, Hong Kong, Japan, Korea, Philippines, all European countries (including specific terms for Austria, Belgium, France, Germany, Hungary, Italy, Poland, and Switzerland).
        </div> */}

        {/* <div className='mt-5'>
        Welcome to the NIKE community!  You are reading these Terms because you are using a NIKE website, digital experience, social media platform, mobile app, wearable technology, or one of our other products or services, all of which are part of NIKE’s Platform (“Platform”).  You may access the Platform through a computer, mobile phone, tablet, console, or other technology, which we refer to here as a “Device”.  Your carrier's normal rates and fees apply to your Device.
        </div>
        <div className='mt-5'>
        These Terms create a legally binding agreement between you and NIKE and its affiliates (which we may refer to as “NIKE,” “we,” “us,” or “our”) regarding your use of the Platform. Please review our List of Local Entities for the name of the NIKE entity responsible for providing the Platform to you and the appropriate contact information. A few important points:
        </div>
        <ul className='list-disc'> 
        <li className='mt-5'>
        Our Terms May Change.  Some jurisdictions do not permit unilateral updates or changes to consumer terms, so this paragraph may not apply to you.  [See Canada terms.] We may update these Terms from time to time.  If a material change is made, we will post a notice on the Platform or send you a notification.  Read through any changes, and if you don’t agree to them, please stop using the Platform.  If you continue to use our Platform after we notify you of changes, you will be deemed to have accepted the updated Terms, except to the extent prohibited by applicable law.  
        </li>
        <li className='mt-5'>Terms of Sale.  By making any purchase with us, you also agree to the Terms of Sale that apply in your country or region. [See Hungarian terms.]</li>
        <li className='mt-5'>
        Privacy Policy.  Our Privacy Policy describes the collection and use of personal information on the Platform and applies to your use of the Platform.
        </li>
        <li className='mt-5'>
        Important Notice for Amateur Athletes.  You are responsible for ensuring that your participation on the Platform does not affect your eligibility as an amateur athlete.  Please check with your amateur athletic association for the rules that apply to you.  NIKE is not responsible or liable for your use of the Platform resulting in your ineligibility as an amateur athlete. 
        </li>
        </ul> */}
    
        </div>
      </div>
    </Wrapper>
  )
}



export default TermsOfUse