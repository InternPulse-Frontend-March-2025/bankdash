import React from 'react'

import spotify from '../assets/images/icons/spotify.png'
import emily from '../assets/images/icons/emily.png'
import mobileService from '../assets/images/icons/mobile-service.png'

const transactions = [
    {
        id: 1,
        title: "Spotify Subscription",
        date: "25 Jan 2021",
        category: "Shopping",
        cardNumber: "1234 ****",
        status: "Pending",
        icon: spotify,
        amount: {
            type: "expense",
            cost: "150"
        }

    },
    {
        id: 2,
        title: "Mobile Service",
        date: "25 Jan 2021",
        category: "Service",
        cardNumber: "1234 ****",
        status: "Completed",
        icon: mobileService,
        amount: {
            type: "income",
            cost: "150"
        }

    },
    {
        id: 3,
        title: "Emily Wilson",
        date: "25 Jan 2021",
        category: "Transfer",
        cardNumber: "1234 ****",
        status: "Pending",
        icon: emily,
        amount: {
            type: "expense",
            cost: "150"
        }

    }
]



const LastTransaction = () => {
  return (
    <div>
      <p className='my-3 font-semibold text-[#333B69]'>Last Transaction</p>
        <div className='p-4 bg-white rounded-xl'>
        {
            transactions.map((transaction) => {
            return (
                <div className='grid grid-cols-[1fr_2fr_1fr]  md:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] md:gap-3 items-center p-1'>
                <div className='w-10'>
                    <img src={transaction.icon} alt="" />
                </div>
                <div className='mr-3'>
                    <p className='main-text'>{transaction.title}</p>
                    <p className='subtext'>{transaction.date}</p>
                </div>
                <p className='subtext text-left hidden md:block'>{transaction.category}</p>
                <p className='subtext text-left hidden md:block'>{transaction.cardNumber}</p>
                <p className='subtext text-left hidden md:block'>{transaction.status}</p>
                <p className={`text-right main-text ${transaction.amount.type === "expense" ? "text-red-500" : "text-green-500"}`}>
                {transaction.amount.type === "expense" ? "-" : "+"}${transaction.amount.cost}
                </p>
            </div>
            )
            })
        }
            
        </div>
    </div>
  )
}

export default LastTransaction
