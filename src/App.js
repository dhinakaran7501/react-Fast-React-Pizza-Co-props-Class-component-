import "./App.css";
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

function App() {
  const pizzaList = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      imgURL: "./images/i1.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      imgURL: "./images/i2.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      imgURL: "./images/i3.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      imgURL: "./images/i4.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      imgURL: "./images/i5.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      imgURL: "./images/i6.jpg",
      soldOut: false,
    },
  ];
  return (
    <div className="App">
      <Header
        name={"Fast React Pizza Co."}
        menu={"Our Menu"}
        content={
          "Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, organic and finger licking delicious"
        }
      />

      <div className="content-section">
        <div className="app-content">
          {pizzaList.map((values, index, array) => (
            <Content
              key={index}
              name={values.name}
              ingredients={values.ingredients}
              price={values.price}
              imgURL={values.imgURL}
              soldOut={values.soldOut}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
