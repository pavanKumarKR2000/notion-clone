"use client";

import { useSettings } from "@/hooks/useSettings";
import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { AlertDialogHeader } from "../ui/alert-dialog";
import { Label } from "../ui/label";
import { ModeToggle } from "../ModeToggle";

const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <AlertDialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My Settings</h2>
        </AlertDialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Jotion looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
