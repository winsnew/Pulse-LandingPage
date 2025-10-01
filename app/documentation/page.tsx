"use client";
import ShinyText from '../../components/customs/shiny-text';

export default function DocumentationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 ">

        <ShinyText
            baseColor="rgb(255, 255, 255)"
            shineColor="rgb(255, 255, 255)"
            speed={2}
            size="3xl"
            weight="semibold"
            direction='left-to-right'
            pauseOnHover={true}
        >
            Coming Soon ... 
        </ShinyText>
    </div>
  );
}