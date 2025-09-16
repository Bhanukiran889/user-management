const sequelize = require("./db");
const User = require("./models/User");
const { v4: uuidv4 } = require("uuid");


const seed = async () => {
  await sequelize.sync({ force: true }); // Drops & recreates tables

  await User.bulkCreate([
    {
      id: uuidv4(),
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      company: "OpenAI",
      street: "123 Main St",
      city: "New York",
      zipcode: "10001",
      lat: "40.7128",
      lng: "-74.0060",
    },
    {
      id: uuidv4(),
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "9876543210",
      company: "Tech Corp",
      street: "456 Park Ave",
      city: "San Francisco",
      zipcode: "94105",
      lat: "37.7749",
      lng: "-122.4194",
    },
    {
      id: uuidv4(),
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "5551234567",
      company: "InnovateX",
      street: "789 Elm St",
      city: "Chicago",
      zipcode: "60601",
      lat: "41.8781",
      lng: "-87.6298",
    },
    {
      id: uuidv4(),
      name: "Bob Lee",
      email: "bob.lee@example.com",
      phone: "5559876543",
      company: "NextGen",
      street: "321 Oak St",
      city: "Houston",
      zipcode: "77002",
      lat: "29.7604",
      lng: "-95.3698",
    },
    {
      id: uuidv4(),
      name: "Carol White",
      email: "carol.white@example.com",
      phone: "5556781234",
      company: "FutureSoft",
      street: "654 Pine St",
      city: "Seattle",
      zipcode: "98101",
      lat: "47.6062",
      lng: "-122.3321",
    },
    {
      id: uuidv4(),
      name: "David Kim",
      email: "david.kim@example.com",
      phone: "5553219876",
      company: "CloudNet",
      street: "987 Maple St",
      city: "Boston",
      zipcode: "02108",
      lat: "42.3601",
      lng: "-71.0589",
    },
  
    {
      id: uuidv4(),
      name: "Quinn Baker",
      email: "quinn.baker@example.com",
      phone: "5552349015",
      company: "GreenLeaf",
      street: "205 Fir St",
      city: "Columbus",
      zipcode: "43215",
      lat: "39.9612",
      lng: "-82.9988",
    },
    {
      id: uuidv4(),
      name: "Ruby Carter",
      email: "ruby.carter@example.com",
      phone: "5553450126",
      company: "SafeHome",
      street: "106 Walnut St",
      city: "Indianapolis",
      zipcode: "46204",
      lat: "39.7684",
      lng: "-86.1581",
    },
  ]);

  console.log(" Database seeded!");
  // process.exit();
};

module.exports = seed;

// seed(); // Uncomment to run seed directly
