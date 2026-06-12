"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ProjectImage({
  src,
  alt,
  className,
  priority = false,
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex aspect-video w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface p-6 text-center",
          className,
        )}
        role="img"
        aria-label={`${alt} screenshot placeholder`}
      >
        <p className="text-xs text-muted">
          Upload screenshot to{" "}
          <code className="font-mono">{src}</code>
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
