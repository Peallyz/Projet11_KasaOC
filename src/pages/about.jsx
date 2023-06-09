import Herobanner from "../Components/Herobanner/Herobanner";
import Accordion from "../Components/Accordion/Accordion";

const About = () => {
  return (
    <main>
      <Herobanner img="montagnes" />
      <section className="accordions accordions__about">
        <Accordion
          type="description"
          title={"Fiabilité"}
          data={{
            description:
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
          }}
          isDynamic={false}
        />
        <Accordion
          type="description"
          title={"Respect"}
          data={{
            description:
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          }}
          isDynamic={false}
        />
        <Accordion
          type="description"
          title={"Service"}
          data={{
            description:
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
          }}
          isDynamic={false}
        />
        <Accordion
          type="description"
          title={"Sécurité"}
          data={{
            description:
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          }}
          isDynamic={false}
        />
      </section>
    </main>
  );
};

export default About;
