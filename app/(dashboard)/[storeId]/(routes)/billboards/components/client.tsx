"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export const BillboardsClient = () => {
    const router = useRouter();
    const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Painel Principal (0)"
          description="Ajuste o painel principal do site"
        />
             <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Adicionar Novo
        </Button>
      </div>
      <Separator />
    </>
  );
};
