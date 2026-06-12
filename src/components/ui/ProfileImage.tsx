"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  className?: string;
}

export function ProfileImage({ className }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-border bg-surface sm:h-28 sm:w-28",
          className,
        )}
        role="img"
        aria-label="Profile photo placeholder"
      >
        <p className="px-2 text-center text-[10px] leading-tight text-muted">
          Upload profile.jpg
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative h-24 w-24 overflow-hidden rounded-full border border-border bg-surface sm:h-28 sm:w-28",
        className,
      )}
    >
      <Image
        src="/assets/profile/profile.jpg"
        alt="Dev Verma — Software Engineer"
        fill
        priority
        className="object-cover"
        sizes="112px"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
