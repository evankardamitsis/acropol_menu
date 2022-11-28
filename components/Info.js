import React from "react";

const Info = () => {
  return (
    <div className="info">
      <h2>ROOM SERVICE AVAILABLE 12:00 - 21:30</h2>
      <p>
        Στις ανωτέρω τιμές συμπεριλαμβάνεται ο ΦΠΑ / All taxes are included in
        the above rates.
      </p>
      <p>
        Ο καταναλωτής δεν έχει υποχρέωση να πληρώσει εάν δε λάβει το νόμιμο
        παραστατικό στοιχείο / Consumer is not obliged to pay if the notice of
        payment has not been received.
      </p>
      <p>
        Οι τηγανιτές πατάτες είναι τηγανισμένες με ηλιέλαιο / French fries are
        fried in sunflower oil.
      </p>
      <style jsx>{`
        .info {
          color: #202021;
          background: #f7f5f5;
          padding: 40px;
          max-width: 100%;
          overflow: hidden;
          display: grid;
          justify-content: center;
          grid-column-start: auto;
          font-family: "Proxima Nova", sans-serif;
          text-align: center;
        }
        .info > p {
          font-size: 0.7rem;
        }
        @media (max-width: 414px) {
          .info {
            text-align: center;
            padding: 40px;
          }
          h2 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Info;
