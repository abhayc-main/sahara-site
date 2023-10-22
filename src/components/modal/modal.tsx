import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ModalContent from "./ModalContent";

const ItemModal = ({ item, category, id, isOpen, onClose }: any) => {
  const handleOpenChange = (open: any) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[1000px] ">
        <DialogHeader>
          <ModalContent 
            itemName={item.title} 
            category={category} 
            price={item.price} // assuming `course` object has `price` attribute
            description={item.desc} // assuming `course` object has `desc` attribute
            imageUrl={item.imageUrl} // assuming `course` object has `imageUrl` attribute
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ItemModal;
