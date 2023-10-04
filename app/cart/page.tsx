const CartPage = () => {
  return (
    <section id='cart' className='container grid gap-5 py-20 lg:grid-cols-2'>
      <div></div>
      <div>
        <h3 className="mini_title">Shipping Info</h3>
        <div className="text-lg">
          <p>Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
        </div>
      </div>
    </section>
  )
}

export default CartPage
