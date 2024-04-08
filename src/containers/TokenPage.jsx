
function TokenPage() {
  return (
    <div className="main">
      <div className="box-token">
        <picture>
          <source srcSet="img/token-info.png" media="(min-width: 1000px)" />
          <img srcSet="img/token-info-mb.png" alt="…" />
        </picture>
        <h3>Total supply 1,000,000,000</h3>
      </div>
    </div>
  )
}

export default TokenPage
