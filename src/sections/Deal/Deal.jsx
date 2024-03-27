import './Deal.css'

const Deal = () => {
  return (
    <section id="deal">
      <div className="deal-container container">
        <div className="deal-left">
          <img src="./banner.jpg" alt="" className='banner'/>
        </div>
        <div className="deal-right">
          <h4>Unlocking Savings Every Step of the Way</h4> 
          <h1>Enjoy Up to 30% Off Your Deal Destination</h1>
          <button className="btn">Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default Deal
