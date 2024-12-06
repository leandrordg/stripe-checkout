import { plans } from "@/data/plans";

import { PlanCard } from "@/components/plan-card";

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto p-6 lg:p-10 flex flex-col gap-3">
      <h1 className="font-medium">Stripe Checkout</h1>
      <p className="text-sm text-gray-600">
        Compre produtos com Stripe + Next.js
      </p>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </section>
    </main>
  );
}
