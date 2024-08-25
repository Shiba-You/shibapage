"use client";
import ThinButton from "@/components/ThinButton";
import CustomButton from "@/features/common/CustomButton";
import { useRouter } from "next/navigation";
import React from "react";

type RouteButtonProps = {
  label: string;
  route: string;
  buttonType: "Custom" | "Thin";
  className?: string;
  typeClassName?: string;
};

const RouteButton = (props: RouteButtonProps) => {
  const router = useRouter();
  if (props.buttonType == "Custom") {
    return (
      <CustomButton
        label={props.label}
        onClick={() => router.push(props.route)}
      />
    );
  } else {
    return (
      <ThinButton
        label={props.label}
        onClick={() => router.push(props.route)}
        className={props.className}
        typeClassName={props.typeClassName}
      />
    );
  }
};

export default RouteButton;
