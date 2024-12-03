import Spinner from "@/components/Spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full">
      <Spinner text="Cargando recursos..." color="#004884" hideText={false} />
    </div>
  );
}
