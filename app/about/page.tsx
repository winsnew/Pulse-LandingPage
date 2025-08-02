"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Microscope,
  Radar,
  Bot,
  Zap,
  Eye,
  Users,
  Target,
  Award,
  Lightbulb,
  TrendingUp,
  Shield,
  Globe,
  CheckCircle
} from "lucide-react";
import { teamMembers, achievements, stats } from "@/lib/constants/appdata";
import Link from "next/link";
import Image from 'next/image';

export default function About() {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      title: "AI Sentiment Analysis",
      description: "Real-time scanning of influencer signals and market sentiment with precision AI models.",
      icon: BrainCircuit,
    },
    {
      title: "Atomic Risk Scoring",
      description: "Quantify asset risk levels using atomic-level behavioral prediction and real-world events.",
      icon: Microscope,
    },
    {
      title: "Predictive Asset Radar",
      description: "Discover and Analyze new token/stock listing with AI-powereed fundamental analysis and sentiment.",
      icon: Radar,
    },
    {
      title: "AI Automation Engine",
      description: "Robotic intelligence that automates alerts, workflows, and strategy triggers in real-time.",
      icon: Bot,
    },
    {
      title: "Lightning Fast Processing",
      description: "Built with GPU acceleration and neural indexing for millisecond decisions.",
      icon: Zap,
    },
    {
      title: "Visual Intelligence",
      description: "Beautiful dashboards with animated AI insights & crypto market behavior mapping.",
      icon: Eye,
    },
  ];


  return (
    <div className="min-h-screen inset-0 -z-10 pointer-events-none">
      {/* <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />

      <div
        className="fixed left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
        aria-hidden="true"
      /> */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[90%] mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold mb-5 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            About Pulse
          </h1>
          <p className="text-md md:text-xl text-gray-300 leading-relaxed">
            Revolutionizing financial decision-making with atomic-level AI intelligence.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-[90%] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 text-white-400 mr-3" />
                <h2 className="text-xl font-bold">Our Mission</h2>
              </div>
              <p className="text-md text-gray-300 leading-relaxed mb-8">
                To simplify decision-making for young retail investors through AI-powered analysis and real-time alerts, giving them a competitive edge in markets where speed and accuracy are paramount.
              </p>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Award className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="bg-gradient-to-r from-black to-gray p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Lightbulb className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-gray-200 ">
                  We aim to create the most responsive and insightful market intelligence platform, making it easy for investors to cut through the noise and act on opportunities as they arise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-to-r from-white to-grey-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base text-gradient-to-r from-white to-grey-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-gradient-to-r from-white to-grey-500 mr-3" />
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
            </div>
            <p className="text-xl text-gray-300">
              World-class experts in AI, finance, and technology
            </p>
          </div>

          {/* Carousel Team Member */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -240 * teamMembers.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
              style={{
                width: `${teamMembers.length * 2 * 100}%`
              }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="bg-black rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm transition-all duration-300 group flex-shrink-0"
                  style={{ width: '320px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img src={member.image} alt={member.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to transparent"></div>
                  </div>

                  {/* Member details */}
                  <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-gray-400 font-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </motion.div>
              ))}

              {/* Duplicates for seamless infinte loop */}
              {teamMembers.map((member, index) => (
                <motion.div key={`second-${index}`}
                  className="bg-black rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm hover:bg-white-700/30 transition-all duration-200 group flex-shrink-0"
                  style={{ width: '320px' }}
                >
                  {/* Member photo with hover */}
                  <div className="relative mb-4 rounded-xl">
                    <img src={member.image} alt={member.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Member details */}
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-gray-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}

            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* What We Built Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-white-400 mr-3" />
              <h2 className="text-3xl font-bold">What We Built</h2>
            </div>
            <p className="text-xl text-gray-300">
              Cutting-edge AI modules that power the future of finance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white-600/20 p-3 rounded-full w-fit mb-4 group-hover:bg-white-600/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-white-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center justify-center mb-8">
            <Globe className="w-6 h-6 text-white-400 mr-3" />
            <h2 className="text-4xl font-bold">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "Constantly pushing the boundaries of AI and financial technology"
              },
              {
                title: "Transparency",
                description: "Building trust through open, explainable AI systems"
              },
              {
                title: "Accessibility",
                description: "Making advanced financial tools available to everyone"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="bg-gradient-to-r from-black to-grey-500 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of investors already using Pulse to make smarter decisions
            </p>
            <div className="flex sm:flex-row justify-center">
              <Link href="/">
                <span className="glass-cta-btn inline-block px-8 py-3 rounded-lg font-semibold text-white 
                                backdrop-blur-md border border-white/10 hover:cursor-pointer pointer-events-auto">
                  Start Free Trial
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}