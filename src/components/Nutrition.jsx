import productDog from "../assets/Rectangle15.png";

export default function Nutrition() {
  return (
    <section className="container grid-2">
      <div>
        <h2>
          Nutrition is the foundation for longer, healthier lives in dogs.
        </h2>

        <p>
          Scientifically formulated superfood-powered supplements that help
          dogs thrive with vitality and energy.
        </p>

        <ul style={{ paddingLeft: 16 }}>
          <li><strong>97%</strong> dogs prefer it over leading brands</li>
          <li><strong>84%</strong> improved nutrient absorption</li>
          <li><strong>92%</strong> better coat quality</li>
        </ul>

        <button className="btn" style={{ marginTop: 24 }}>
          Give your furry friend the gift of nutrition
        </button>
      </div>

      <img src={productDog} alt="Happy dog with product" />
    </section>
  );
}
