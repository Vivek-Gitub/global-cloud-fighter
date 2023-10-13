import productAPI from "./API/productsAPI";

const Card = () => {
  console.log(productAPI);

  return (
    <>
      <div className="card-style">
        <div className="row gy-2 py-2">
          {productAPI.length > 0 &&
            productAPI.map((product, index) => {
              return (
                <div className="col-12 col-lg-4 single-card" key={index}>
                  <div className="card card-bg">
                    <img
                      src={product.image_url}
                      className="card-img-top"
                      alt="..."
                      height={200}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.info}</p>
                      <a href="https://github.com/" class="btn card-button" target="_blank">
                        view more
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Card;
