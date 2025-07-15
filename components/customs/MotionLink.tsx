"use client";

import Link, { LinkProps } from "next/link";
import { motion, MotionProps } from "framer-motion";
import { AnchorHTMLAttributes, forwardRef } from "react";

// Gabungkan props dari <a>, Next.js Link, dan Motion
type MotionLinkProps = LinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    MotionProps;

const MotionLink = forwardRef<HTMLAnchorElement, MotionLinkProps>(
    ({ href, children, ...rest }, ref) => {
        return (
            <Link href={href} passHref legacyBehavior>
                {/* motion.a agar bisa animasi */}
                <motion.a ref={ref} {...rest}>
                    {children}
                </motion.a>
            </Link>
        );
    }
);

MotionLink.displayName = "MotionLink";

export default MotionLink;

