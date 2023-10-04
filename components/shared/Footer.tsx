import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-dark text-light'>
      <div className='container grid gap-10 py-5 lg:grid-cols-3'>
        <div>
          <h3 className='mini_title'>Printas</h3>
          <p>
            Remember to customize this content to fit your brand&lsquo;s unique
            identity and the specific products you offer. High-quality images of
            your custom-printed products and an easy-to-navigate website design
            will also enhance the overall user experience.
          </p>
        </div>
        <div></div>
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='w-fit border-b'>
              <Link href='/'>Privacy Policy</Link>
            </li>
            <li className='w-fit border-b'>
              <Link href='/'>Refund Policy</Link>
            </li>
            <li className='w-fit border-b'>
              <Link href='/'>Shipping Info</Link>
            </li>
            <li className='w-fit border-b'>
              <Link href='/'>Facebook</Link>
            </li>
          </ul>
        </div>

        <div className='flex items-center justify-center uppercase lg:col-span-3'>
          <p>© 2023 Printas, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
