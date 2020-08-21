import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const products = [
		{ name: "Photoshop", price: "$90.00" },
		{ name: "Illustrator", price: "$80.00" },
		{ name: "XD", price: "$50.99" },
	];
	return (
		<div className="App">
			<header className="App-header">
				<Counter></Counter>
				<Users></Users>
				<ul>
					{products.map((product) => (
						<li>{product.name}</li>
					))}
				</ul>
				{products.map((product) => (
					<Product product={product}></Product>
				))}
			</header>
		</div>
	);
}

function Counter() {
	const buttonStyle = {
		background: "transparent",
		padding: "10px 20px",
		border: "2px solid gray",
		margin: "10px auto",
		color: "white",
	};
	const handleIncrement = () => setCount(count + 1);
	const handleDecrement = () => setCount(count - 1);
	const [count, setCount] = useState(10);
	return (
		<div>
			<h1>Count: {count}</h1>
			<button style={buttonStyle} onClick={handleIncrement}>
				Increment
			</button>
			<button style={buttonStyle} onClick={handleDecrement}>
				Decrement
			</button>
		</div>
	);
}

function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	});
	return (
		<div>
			<h2>Dynamic Users:</h2>
			<ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
		</div>
	);
}

function Product(props) {
	const productStyle = {
		background: "rgba(255, 255, 255, 0.1)",
		margin: "10px",
		padding: "20px",
		borderRadius: "10px",
		height: "200px",
		width: "300px",
	};

	const { name, price } = props.product;
	return (
		<div style={productStyle}>
			<h1>{name}</h1>
			<h4>{price}</h4>
		</div>
	);
}

export default App;
