function MintNftPage() {
  return (
    <div className="main">
      <div className="box-mint-nft">
        <picture className="txt-mint">
          <source srcSet="img/txt-mint.png" media="(min-width: 1000px)" />
          <img srcSet="img/txt-mint-mb.png" alt="…" />
        </picture>
        <div className="box-main-nft">
          <img src="img/nft-8.png" />
          <p className="txt-count">1233/3000</p>
          {/* <a href="#" className="btn-mint">connect wallet</a> */}
          <a href="#" className="btn-mint">Mint NFT</a>
        </div>
        <div className="box-list">
          <div className="nft nft-1"></div>
          <div className="nft nft-2"></div>
          <div className="nft nft-3"></div>
          <div className="nft nft-4"></div>
          <div className="nft nft-5"></div>
          <div className="nft nft-6"></div>
          <div className="nft nft-7"></div>
        </div>

      </div>
    </div>
  )
}

export default MintNftPage
