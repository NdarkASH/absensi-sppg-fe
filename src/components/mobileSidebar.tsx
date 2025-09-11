import React from "react";
import { Icon } from "@iconify/react";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";

import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* Mobile Header */}
      <div className="h-16 border-b border-divider flex items-center px-4 bg-content1">
        <Button
          isIconOnly
          aria-label="Open menu"
          variant="light"
          onPress={onOpen}
        >
          <Icon height={24} icon="lucide:menu" width={24} />
        </Button>

        <div className="ml-4 flex items-center gap-2">
          <Icon
            className="text-primary"
            height={24}
            icon="lucide:layers"
            width={24}
          />
          <span className="font-semibold text-lg">HeroUI App</span>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <DrawerBody className="p-0">
              <Sidebar />
            </DrawerBody>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
