export const plans = [
  {
    id: "price_1JgkZyJZ6Z6Z6Z6Z6Z6Z6Z6Zd",
    name: "Plano Gratuito",
    description: "Plano gratuito para uso pessoal.",
    features: [
      {
        id: "1",
        name: "1 usuário",
      },
      {
        id: "2",
        name: "1 projeto",
      },
      {
        id: "3",
        name: "100 MB de armazenamento",
      },
    ],
    priceMonthly: 0,
    priceYearly: 0,
    discountMonthly: 0,
    discountYearly: 0,
  },
  {
    id: "price_1JgkZyJZ6Z6Z6Z6Z6Z6Z6Z6Zw",
    name: "Plano Starter",
    description: "Plano para pequenos projetos.",
    features: [
      {
        id: "1",
        name: "1 usuário",
      },
      {
        id: "2",
        name: "3 projetos",
      },
      {
        id: "3",
        name: "500 MB de armazenamento",
      },
    ],
    priceMonthly: 14.99,
    priceYearly: 149.99,
    discountMonthly: 5,
    discountYearly: 10,
  },
  {
    id: "price_1JgkZyJZ6Z6Z6Z6Z6Z6Z6Z6Zs",
    name: "Plano Premium",
    description: "Plano para grandes projetos.",
    features: [
      {
        id: "1",
        name: "5 usuários",
      },
      {
        id: "2",
        name: "10 projetos",
      },
      {
        id: "3",
        name: "1 GB de armazenamento",
      },
    ],
    priceMonthly: 29.99,
    priceYearly: 299.99,
    discountMonthly: 10,
    discountYearly: 15,
  },
  {
    id: "price_1JgkZyJZ6Z6Z6Z6Z6Z6Z6Z6Zz",
    name: "Plano Enterprise",
    description: "Plano para empresas.",
    features: [
      {
        id: "1",
        name: "10 usuários",
      },
      {
        id: "2",
        name: "20 projetos",
      },
      {
        id: "3",
        name: "2 GB de armazenamento",
      },
    ],
    priceMonthly: 49.99,
    priceYearly: 499.99,
    discountMonthly: 15,
    discountYearly: 20,
  },
];

export type Plans = typeof plans;
export type Plan = (typeof plans)[number];
