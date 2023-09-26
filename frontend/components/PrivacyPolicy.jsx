import React from 'react'
import Wrapper from "./Wrapper";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


export default function PrivacyPolicy({pap}) {
  return (
    <Wrapper>
        <div className='text-center text-2xl md:text-[35px] font-bold py-4'> PRIVACY AND POLICY</div>
      <div className=" text-justify mx-auto px-6 py-6 h-[100%] w-[100] border border-gray-900 rounded-3xl  my-8">
      <ReactMarkdown>
                                {pap?.pap.data?.attributes?.pap}
                            </ReactMarkdown>

        {/* <div className='px-3 md:text-lg'>
        This Privacy Policy (“Policy”) applies to the personal information that Nike, Inc. collects and processes when you interact with us as a customer, including when you interact with our websites, digital experiences, mobile apps, stores, online or offline events, promotions, or one of our other products or services, all of which are part of Nike’s “Platform” and direct to this Privacy Policy. This Policy also applies to the personal information that Nike processes when you subscribe to receive marketing communications from us, communicate with us or engage with us via our Platform, or participate in contests, sweepstakes, and surveys.
        <br></br>

Nike may provide you with additional privacy notices that will apply to certain personal information collected and processed by us. For example, we may provide additional notice to provide more specific information if you choose to take advantage of a particular partner promotion.  This Policy does not apply to your personal information if you work for us as an employee or independent contractor, apply for a job at Nike, or interact with third party partners or websites that are linked to or accessible from Nike’s Platform.
        </div> */}
      </div>
    </Wrapper>
  );
};
