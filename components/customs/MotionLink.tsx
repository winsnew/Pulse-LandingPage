"use client";

import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { MotionProps } from "framer-motion";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type CombinedProps = LinkProps & AnchorProps & MotionProps;

const MotionLink = forwardRef<HTMLAnchorElement, CombinedProps>(
    ({ href, children, className, ...rest }, ref) => {
        return (
            <Link href={href} passHref>
                <motion.a ref={ref} className={className} {...rest}>
                    {children}
                </motion.a>
            </Link>
        );
    }
);

MotionLink.displayName = "MotionLink";

export default MotionLink;
