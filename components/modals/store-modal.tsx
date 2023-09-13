"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Criar loja"
      description="Adicione um novo produto ou categoria na loja"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Futura Criação do Form
    </Modal>
  );
};
