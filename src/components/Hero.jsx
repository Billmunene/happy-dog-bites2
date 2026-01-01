import leftFood from "../assets/Rectangle 40557.png";
import rightFood from "../assets/Rectangle 40556.png";

// placeholder icons
import realFoodIcon from "../assets/realfood.png";
import premiumIcon from "../assets/premium.png";
import freshIcon from "../assets/fresh.png";
import vetIcon from "../assets/vet.png";
import arrowIcon from "../assets/arrow.png";

import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/master.png";
import applepay from "../assets/apple.png";
import googlepay from "../assets/gpay.png";

export default function Hero() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>
        What makes us different <br /> makes them stronger
      </h2>

      <div style={styles.content}>
        {/* LEFT FEATURES */}
        <div style={styles.features}>
          <Feature
            icon={realFoodIcon}
            bg="#E9F8EE"
            title="Real Food"
            text="Wholesome recipes for dogs with real meat and veggies."
          />
          <Feature
            icon={premiumIcon}
            bg="#FFF6E5"
            title="Premium Ingredient"
            text="Elevating pet care with unmatched safety and quality."
          />
        </div>

        {/* CENTER IMAGE */}
        <div style={styles.imageWrapper}>
          <div style={styles.circle}>
            <img src={leftFood} alt="" style={styles.leftImage} />
            <img src={rightFood} alt="" style={styles.rightImage} />

            <div style={styles.divider} />

            <div style={styles.arrow}>
              <img src={arrowIcon} alt="" style={{ width: 16 }} />
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div style={styles.features}>
          <Feature
            icon={freshIcon}
            bg="#E8F7F4"
            title="Made Fresh"
            text="We prioritize maintaining the integrity of whole foods and nutrition."
          />
          <Feature
            icon={vetIcon}
            bg="#FFEAE5"
            title="Vet Developed"
            text="We raise the bar for dog nutrition, surpassing industry expectations."
          />
        </div>
      </div>

      <button style={styles.button}>
        Get your dog's healthy meal today!
      </button>

      {/* TRUST ROW */}
      <div style={styles.trustRow}>
        <div style={styles.guarantee}>
          <span style={styles.check}>✓</span>
          <span>30-day money back guarantee</span>
        </div>

        <div style={styles.payments}>
          <img src={paypal} alt="PayPal" style={styles.paymentImg} />
          <img src={visa} alt="Visa" style={styles.paymentImg} />
          <img src={mastercard} alt="Mastercard" style={styles.paymentImg} />
          <img src={applepay} alt="Apple Pay" style={styles.paymentImg} />
          <img src={googlepay} alt="Google Pay" style={styles.paymentImg} />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, bg, title, text }) {
  return (
    <div style={styles.feature}>
      <div style={{ ...styles.iconWrap, background: bg }}>
        <img src={icon} alt="" style={styles.icon} />
      </div>
      <div>
        <h4 style={styles.featureTitle}>{title}</h4>
        <p style={styles.featureText}>{text}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "90px 24px",
    textAlign: "center",
  },

  title: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: 72,
    color: "#111827",
  },

  content: {
    display: "grid",
    gridTemplateColumns: "1fr 370px 1fr",
    alignItems: "center",
    gap: 56,
    marginBottom: 64,
  },

  features: {
    display: "flex",
    flexDirection: "column",
    gap: 56,
    textAlign: "left",
  },

  feature: {
    display: "flex",
    gap: 18,
    alignItems: "flex-start",
  },

  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  icon: {
    width: 24,
    height: 24,
  },

  featureTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 600,
    color: "#111827",
  },

  featureText: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 1.6,
    color: "#6B7280",
    maxWidth: 260,
  },

  imageWrapper: {
    display: "flex",
    justifyContent: "center",
  },

 circle: {
  position: "relative",
  width: 370,
  height: 370,
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
},

leftImage: {
  width: "100%",           // double width so only left half fits
  height: "100%",
  objectFit: "cover",
  clipPath: "inset(0 50% 0 0)", // show only left half
},

rightImage: {
  width: "100%",           // double width so only right half fits
  height: "100%",
  objectFit: "cover",
  clipPath: "inset(0 0 0 50%)", // show only right half
  position: "absolute",     // overlay perfectly
  top: 0,
  left: 0,
},

  divider: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: 2,
    background: "#fff",
  },

  arrow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 36,
    height: 36,
    background: "#fff",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },

  button: {
    padding: "18px 44px",
    fontSize: 16,
    fontWeight: 600,
    background: "#F36F45",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },

  trustRow: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 28,
    flexWrap: "wrap",
    fontSize: 14,
    color: "#6B7280",
  },

  guarantee: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    whiteSpace: "nowrap",
  },

  check: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    border: "1.5px solid #6B7280",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
  },

  payments: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },

  paymentImg: {
    height: 20,
    objectFit: "contain",
  },
};
