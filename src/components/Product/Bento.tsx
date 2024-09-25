"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  BarChart,
  MessageCircle,
  CreditCard,
  BookOpen,
  Clock,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

export function Bento() {
  const features = [
    {
      icon: Calendar,
      title: "Inteligentne planowanie",
      description: "Optymalizuj harmonogram zajęć z wykorzystaniem AI",
    },
    {
      icon: Users,
      title: "Zarządzanie kursantami",
      description: "Łatwe zarządzanie bazą klientów i ich postępami",
    },
    {
      icon: BarChart,
      title: "Analityka i raporty",
      description: "Zaawansowane statystyki i raporty dla lepszego zarządzania",
    },
    {
      icon: MessageCircle,
      title: "Komunikacja",
      description:
        "Wbudowany system komunikacji między instruktorami a kursantami",
    },
    {
      icon: CreditCard,
      title: "Płatności online",
      description: "Bezpieczne i wygodne płatności za kursy",
    },
    {
      icon: BookOpen,
      title: "Materiały edukacyjne",
      description: "Dostęp do cyfrowych materiałów szkoleniowych",
    },
    {
      icon: Clock,
      title: "Przypomnienia",
      description: "Automatyczne powiadomienia o zbliżających się jazdach",
    },
    {
      icon: Zap,
      title: "Wydajność",
      description: "Zwiększ efektywność swojej szkoły jazdy",
    },
  ];

  return (
    <div className="container mx-auto px-0 md:px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2 row-span-2 bg-gradient-to-br from-primary to-secondary text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              System Rezerwacji dla Szkół Jazdy
            </CardTitle>
            <CardDescription className="text-blue-100">
              Zrewolucjonizuj swoją szkołę jazdy z naszym innowacyjnym systemem
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Kompleksowe rozwiązanie dla nowoczesnych szkół jazdy, łączące
              zaawansowane funkcje z intuicyjnym interfejsem.
            </p>
            <Button variant="secondary" className="">
              Wyproboj demo
            </Button>
          </CardContent>
        </Card>

        {features.map((feature, index) => (
          <Card
            key={index}
            className={index < 2 ? "md:col-span-1 row-span-1" : ""}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {feature.title}
              </CardTitle>
              <feature.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}

        <Card className="md:col-span-2 row-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Statystyki systemu
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Aktywnych szkół</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">10,000+</p>
              <p className="text-sm text-muted-foreground">
                Kursantów miesięcznie
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-muted-foreground">
                Zadowolonych klientów
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-secondary to-primary text-white pt-6">
          <CardContent className="flex flex-col items-center justify-center h-full">
            <h3 className="text-lg font-semibold mb-2">Rozpocznij za darmo</h3>
            <p className="text-sm mb-4 text-center">
              Wypróbuj nasz system przez 14 dni bez żadnych zobowiązań
            </p>
            <Button variant="secondary">Zacznij teraz</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
