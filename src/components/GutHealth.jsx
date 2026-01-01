import dogsEating from "../assets/Rectangle8.png";

export default function GutHealth() {
  return (
    <section className="container grid-2">
      <img src={dogsEating} alt="Dogs eating" />

      <div>
        <h2>
          Improve overall gastrointestinal health for better nutrient absorption
        </h2>

        <p>
          Through rigorous scientific studies and vet consultations, our formula
          helps address digestive health challenges in dogs.
        </p>
      </div>
    </section>
  );
}
