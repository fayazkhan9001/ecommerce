"use client";

import React, { SetStateAction, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CiSearch } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const NavSearchModal = ({ setIsOpen }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 sm:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-95 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    <div className="flex justify-center items-center border-2 rounded-full px-3">
                      <input
                        type="text"
                        className={`w-full p-2 bg-transparent text-white placeholder:text-white placeholder:text-sm outline-none `}
                        placeholder="What are you looking for ?"
                      />
                      <CiSearch className="text-2xl text-white cursor-pointer" />
                    </div>
                  </DialogTitle>
                </div>
              </div>
            </div>
          </DialogPanel>
          <IoCloseCircleOutline
            className="absolute top-3 right-3 text-2xl text-white"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </Dialog>
  );
};
