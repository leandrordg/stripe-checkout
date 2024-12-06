"use client";

import { useState } from "react";

import { Plan } from "@/data/plans";
import { formatPrice } from "@/lib/utils";

import { CheckIcon, CirclePercentIcon } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  plan: Plan;
};

export function PlanCard({ plan }: Props) {
  if (plan.priceMonthly === 0) return null; // Se for gratuito, não exibe

  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  const currentPrice = {
    monthly:
      plan.priceMonthly - plan.priceMonthly * (plan.discountMonthly / 100),
    annual: plan.priceYearly - plan.priceYearly * (plan.discountYearly / 100),
  }[period];

  const handleChange = (value: "monthly" | "annual") => {
    if (value === period) return;

    return () => setPeriod(value);
  };

  const isActive = (value: "monthly" | "annual") =>
    period === value ? "active" : "ghost";

  console.log("renderizou")

  return (
    <div className="flex flex-col gap-3 p-6 rounded-xl border">
      <h4 className="font-medium">{plan.name}</h4>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">{formatPrice(currentPrice)}</h1>
          <div className="flex items-center text-sm gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
            <CirclePercentIcon className="size-4" />
            <p>
              {period === "monthly"
                ? plan.discountMonthly
                : plan.discountYearly}
              % OFF
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          por usuário/{period === "monthly" ? "mês" : "ano"}
        </p>
      </div>

      <p className="text-sm text-gray-600">Selecione o plano:</p>

      {plan.priceMonthly !== 0 && (
        <div className="flex items-center border rounded-lg overflow-hidden">
          <Button
            size="sm"
            variant={isActive("monthly")}
            onClick={handleChange("monthly")}
          >
            Mensal
          </Button>

          <Button
            size="sm"
            variant={isActive("annual")}
            onClick={handleChange("annual")}
          >
            Anual
          </Button>
        </div>
      )}

      <p>{plan.description}</p>

      {plan.features.map((feature) => (
        <div key={feature.id} className="flex items-center gap-3">
          <CheckIcon className="size-4 text-blue-600" />
          <p className="text-sm text-gray-600">{feature.name}</p>
        </div>
      ))}

      <Button variant="cart" size="sm">
        Fazer o upgrade
      </Button>
    </div>
  );
}
