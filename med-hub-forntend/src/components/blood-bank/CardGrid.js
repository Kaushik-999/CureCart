import React from "react";
import Card from "./Card";
import "./CardGrid.css";

const CardGrid = () => {
  return (
    <div className="card-grid">
      <Card
        image="https://st3.depositphotos.com/12985790/17258/i/950/depositphotos_172581558-stock-photo-woman-filling-in-registration-form.jpg"
        title="REGISTRATION"
        paragraph="You need to complete a very simple registration form that contains all the required contact information to begin the donation process."
      />
      <Card
        image="https://www.fvhospital.com/wp-content/uploads/2021/05/image005.jpg"
        title="SCREENING"
        paragraph="A drop of blood from your finger will be tested to ensure that your blood iron levels are adequate for donation."
      />
      <Card
        image="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80"
        title="DONATION"
        paragraph="After ensuring you pass the screening test successfully, you will be directed to a donor bed for donation. It will take only 6–10 minutes."
      />
      <Card
        image="https://thumbs.dreamstime.com/b/food-drink-health-care-diet-nutrition-concept-fresh-red-blood-orange-juice-ripe-organic-citrus-fruits-bottle-112709338.jpg"
        title="REFRESHMENT"
        paragraph="You can also stay in the sitting room until you feel strong enough to leave our center. You will receive an awesome drink from us in the donation zone."
      />
    </div>
  );
};

export default CardGrid;
