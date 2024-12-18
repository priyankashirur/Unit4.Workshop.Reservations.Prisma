//In prisma/seed.js, seed at least 4 customers and 3 restaurants into the database. Also seed at least 3 reservations

const prisma = require("../prisma");
const seed = async () => {
  // TODO: fill in Customer, Restaurant and Reservation

  const createCustomers = async () => {
    const customers = [
      { name: "Priyanka" },
      { name: "Ananth" },
      { name: "Riya" },
      { name: "Amisha" },
    ];
    await prisma.customer.createMany({ data: customers });
  };

  const createRestaurants = async () => {
    const restaurants = [
      { name: "Cobi's" },
      { name: "Si Mon" },
      { name: "Planta Cocina" },
    ];
    await prisma.restaurant.createMany({ data: restaurants });
  };

  const createReservations = async () => {
    const reservations = [
      {
        customerId: 1,
        restaurantId: 1,
        date: new Date("2024-12-20"),
        partyCount: 4,
      },
      {
        customerId: 2,
        restaurantId: 2,
        date: new Date("2024-12-21"),
        partyCount: 4,
      },
      {
        customerId: 3,
        restaurantId: 3,
        date: new Date("2024-12-22"),
        partyCount: 4,
      },
      {
        customerId: 4,
        restaurantId: 2,
        date: new Date("2024-12-23"),
        partyCount: 4,
      },
    ];
    await prisma.reservation.createMany({ data: reservations });
  };

  await createCustomers();
  await createRestaurants();
  await createReservations();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
