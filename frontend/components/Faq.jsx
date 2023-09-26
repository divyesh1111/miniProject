import Wrapper from '@/components/Wrapper'
import React, { useState } from 'react'




const Faq = () => {

    const [selected,setSelected] = useState(null);

    const toggle = (i) =>{
            if (selected === i ){
                return setSelected(null)

            }

            setSelected(i);
    }
  return (
    <Wrapper className="justify-center my-14">
        <h2 className=" text-2xl md:text-4xl font-bold text-center text-gray-900 border-b-2 border-gray-400">
                    FAQ
        </h2>
        <div className='flex justify-center'>
            <div className='accordion mt-10'>
                {data.map((item,i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2 className='hover:font-semibold'>{item.question}</h2>
                            <span>{selected === i ? "-" : "+"}</span>

                        </div>
                    <div className={selected === i ? "content show" : "content" } > {item.answer}</div>
                    </div>
            
                    
                ))}
            </div>
        </div>
    </Wrapper>
  )
}



const data = [
    {
        question: ' Does my order need to go through customs?',
        answer:"Since your order is dispatched internationally, it has to be cleared through customs. Don't worry—just confirm your delivery information and we'll handle it for you. The delivery date provided at checkout accounts for clearance times. Be aware that some banks may charge a small transaction fee for orders dispatched internationally."  
    },
    {
       
        question: ' Can I save my information to make checkout faster?',
        answer:"Yes, you can save your delivery information in your settings prior to your order, and save your payment information when you place an order. Once saved, you can auto-populate your information for the next release."  
    },
    {
        question: ' How will I know if I got a pair?',
        answer:" Keep your browser window open for a few minutes—a message will pop up to let you know if you got a pair or not. We'll also send you an email to let you know, usually within a couple of hours."

    },
    {
        question: " Why don't I see Apple Pay as an option?",
        answer:" To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com."


    },
    {
        question: " When will I be refunded?",
        answer:"  Once we receive and process your return, we'll inspect it and issue a refund to the payment method you originally used. Refer to our refund information for additional details."



    },
    {
        question: "  Can I return my Nike By You shoes?",
        answer:"    Yes, Nike By You shoes are included in our returns policy. You'll just need to start your return above."
    },
    {
        question: "   What if I have multiple boxes to return?",
        answer:"    You can package your return in multiple packages if needed, but make sure you create a separate return for each box. This helps us process your return faster."
    },
    {
        question: "    Can I reschedule my pick-up?",
        answer:"     Don't worry if you missed your scheduled pick-up—the return carrier will contact you to reschedule. Make sure someone is available to give the package to the carrier."
    }

]

export default Faq;